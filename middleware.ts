import { NextMiddleware, NextResponse } from "next/server";
const PUBLIC_FILE = /\.(.*)$/;

export const middleware: NextMiddleware = async (req, event) => {
  const pathname = req.nextUrl.pathname;
  // we ignore running this middleware when the request is to a serverless function or a file in public/.
  // This is purely optional.
  const isPageRequest =
    !PUBLIC_FILE.test(pathname) &&
    !pathname.startsWith("/api") &&
    !pathname.endsWith("/chapters");

  const sendAnalytics = async () => {
    const slug = pathname.split("/chapters/")[1];
    // Change your production URL!
    let URL = "";
    if (process.env.NODE_ENV === "production") {
      URL = "https://rajbir.io/api/views";
    } else if (process.env.NODE_ENV === "development") {
      URL = "http://localhost:3000/api/views";
    }
    const res = await fetch(`${URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        slug,
      }),
    });
    if (res.status !== 200) {
      console.error("Failed to send analytics", res);
    }
  };

  // event.waitUntil is the real magic here:
  // it won't wait for sendAnalytics() to finish before continuing the response,
  // so we avoid delaying the user.
  if (isPageRequest) event.waitUntil(sendAnalytics());
  return NextResponse.next();
};

export const config = {
  matcher: ["/chapters/:path*"],
};
