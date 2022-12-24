import { NextApiRequest, NextApiResponse } from "next";
import supabase from "@/lib/supabase/private";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      try {
        // Query the pages table in the database where slug equals the request params slug.
        const { data } = await supabase
          .from("analytics")
          .select("views")
          .filter("slug", "eq", req.query.slug);

        if (data == null) {
          return res.status(404).send("No data");
        }
        return res.status(200).json({
          data: data[0].views,
        });
      } catch (error) {
        return res.status(400).send(error);
      }
    }
  }
}
