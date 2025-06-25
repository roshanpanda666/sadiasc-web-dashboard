import { NextResponse } from "next/server";
import { connectionuri } from "../../lib/db";
import DetectionEvent from "../../lib/model/userdata";
import mongoose from "mongoose";
export async function GET() {
    await mongoose.connect(connectionuri);
  
    // Sort by timestamp DESCENDING (newest first)
    const data = await DetectionEvent.find().sort({ timestamp: -1 });
  
    return NextResponse.json({ result: data.map(d => d.toObject()) });
  }
  