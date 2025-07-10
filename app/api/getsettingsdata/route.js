import { connectionuri } from "@/app/lib/db";
import settingsLogs from "@/app/lib/model/settings-logs";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionuri)
    const data=await settingsLogs.find()
    return NextResponse.json({result:data})

}