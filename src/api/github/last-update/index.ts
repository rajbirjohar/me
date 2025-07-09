import { NextResponse } from "next/server";
import { getLastUpdate } from "@/lib/github";

export async function GET() {
	const data = await getLastUpdate();
	return NextResponse.json(data, { status: 200 });
}
