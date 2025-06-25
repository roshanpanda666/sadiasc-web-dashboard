import { NextResponse } from "next/server";
import { connectionuri } from "../../lib/db";
import DetectionEvent from "../../lib/model/userdata";
import mongoose from "mongoose";
export async function GET(){
    await mongoose.connect(connectionuri)
    const data=await DetectionEvent.find()
    console.log(data);
    return NextResponse.json({result:data})
}