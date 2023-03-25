import { NextApiRequest, NextApiResponse } from "next";
import privateClient from "@/utils/supabase/private";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST": {
      try {
        // `increment_views` is the name we assigned to the function in Supabase, and page_slug is the argument we defined.
        await privateClient.rpc("increment_views", {
          page_slug: req.query.slug,
        });
        return res.status(200).json("Success");
      } catch (error) {
        return res.status(400).json(error);
      }
    }
    case "GET": {
      try {
        // Query the pages table in the database where slug equals the request params slug.
        const { data } = await privateClient
          .from("analytics")
          .select("views")
          .filter("slug", "eq", req.query.slug);

        if (data === null || data === undefined) {
          return res.status(404).json("No data");
        }

        return res.status(200).json(data[0].views);
      } catch (error) {
        return res.status(400).json(error);
      }
    }
  }
}
