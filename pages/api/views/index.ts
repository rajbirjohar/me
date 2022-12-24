import { NextApiRequest, NextApiResponse } from "next";
import supabase from "@/lib/supabase/private";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      // `increment_views` is the name we assigned to the function in Supabase, and page_slug is the argument we defined.
      await supabase.rpc("increment_views", { page_slug: req.body.slug });
      return res.status(200).send("Success");
    } catch (error) {
      return res.status(400).send(error);
    }
  }
  if (req.method === "GET") {
    try {
      const { data } = await supabase
        .from("analytics")
        .select("slug, views, likes");

      if (data == null) {
        return res.status(404).send("No data");
      }
      return res.status(200).json({
        data: data,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
};

export default handler;
