/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "My default title";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
            gap: "148px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "rgb(0,0,0)",
              background: "url(https://rajbir.io/static/images/gradient.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
          <div
            style={{
              fontSize: 60,
              fontStyle: "normal",
              color: "white",
              lineHeight: 1.4,
              whiteSpace: "pre-wrap",
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1920,
        height: 1080,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
