import { NextApiRequest, NextApiResponse } from "next";
import privateClient from "@/utils/supabase/private";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const { data } = await privateClient
        .from("analytics")
        .select("slug, views, likes");

      if (data == null) {
        return res.status(404).send("No data");
      }
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
};

export default handler;
