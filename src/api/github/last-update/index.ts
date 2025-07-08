import { NextResponse } from "next/server";
import { getLastUpdate } from "@/lib/github";

export async function GET() {
  try {
    const data = await getLastUpdate();
    return NextResponse.json(data, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
