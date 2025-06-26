import { connectionuri } from "@/app/lib/db";
import AdminUser from "@/app/lib/model/admindetail";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionuri)
    const admins=await AdminUser.find()
    return NextResponse.json({result:admins})
}