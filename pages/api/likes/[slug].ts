import { createHash } from "crypto";
import { NextApiRequest, NextApiResponse } from "next";
import supabase from "@/lib/supabase/private";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ipAddress =
    req.headers["x-forwarded-for"] ||
    // Fallback for localhost or non Vercel deployments
    "0.0.0.0";

  const currentUserId =
    // Since a users IP address is part of the sessionId in our database, we
    // hash it to protect their privacy. By combining it with a salt, we get
    // get a unique id we can refer to, but we won't know what their ip
    // address was.
    createHash("md5")
      .update(ipAddress + process.env.IP_ADDRESS_SALT!, "utf8")
      .digest("hex");

  // Identify a specific users interactions with a specific post
  const sessionId = req.query.slug + "-" + currentUserId;

  switch (req.method) {
    case "GET": {
      try {
        const [chapter, user] = await Promise.all([
          // Get all likes per slug
          supabase.from("analytics").select("*").eq("slug", req.query.slug),

          // Get all likes per user per slug
          supabase
            .from("likes")
            .select("*")
            .eq("userid", sessionId)
            .eq("slug", req.query.slug),
        ]);
        if (chapter.data === null || user.data === null) {
          return res.status(404).send("No data");
        }
        return res.status(200).json({
          likes: chapter.data.length > 0 ? chapter.data[0].likes : 0,
          userLikes: user.data.length > 0 ? user.data[0].user_likes : 0,
        });
      } catch (error) {
        return res.status(400).json({ error: error });
      }
    }
    case "POST": {
      try {
        const response = await supabase.rpc("increment_likes", {
          page_slug: req.query.slug,
          user_id: sessionId,
        });
        return res.status(200).json({ message: response });
      } catch (error) {
        return res.status(400).json({ error: error });
      }
    }
  }
}
