import {userModel} from "@/src/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";




export async function POST(req){
    const {username, email, password} = await req.json();

    const hashedPassword = await bcrypt.hash(password, 5);

    const feedback = await userModel.create({username , password :  hashedPassword}, email );



    return NextResponse.json({message: "User created successfully!",feedback});
}