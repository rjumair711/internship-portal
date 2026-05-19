import Application from '../../../models/Application';
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";


export async function GET() {
  try {
    await dbConnect();

    const applications = await Application.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      data: applications,
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