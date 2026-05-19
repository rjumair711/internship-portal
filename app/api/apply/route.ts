import Application from '../../../models/Application';
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();

    const application = await Application.create(body);

    return NextResponse.json({
      success: true,
      data: application,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error,
      },
      { status: 500 }
    );
  }
}