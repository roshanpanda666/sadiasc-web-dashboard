import { connectionuri } from "@/app/lib/db";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOption } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import AdminUser from "@/app/lib/model/admindetail";


export async function GET(){
    try{
        await mongoose.connect(connectionuri)
        const session= await getServerSession(authOption)
        if(!session || !session.AdminUser?.email){
            return NextResponse.json({success: false,message:"not authenticated"})
        }

        const email=session.user.email
        const user=await AdminUser.findOne({email})

        if(!user){
            return NextResponse.json({success:false,message:"user not found"})
        }

        return NextResponse.json({
            success: true,
            user: AdminUser.email || [], // default to empty array if undefined
          });
    }

    catch (error){
        console.error("fetch user comment error:",error)
        return NextResponse.json({ success: false, message: "Server error" });
    }
}