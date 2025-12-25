"use server";

import { dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export async function registerUser(userData) {
    const {name, email, password, nid, contact} = userData;

    const isUserExist = await dbConnect('users').findOne({email});
    if (isUserExist) return {
        acknowledged: false,
        message: "User already exist. Failed to register."
    }

    const user = {
        provider: "credentials",
        name,
        email,
        password: await bcrypt.hash(password, 10),
        nid,
        contact
    }

    const result = await dbConnect('users').insertOne(user);
    return {
        ...result,
        insertedId: result.insertedId?.toString()
    }
}

export async function loginUser(userData) {
    const {email, password} = userData;
    const user = await dbConnect('users').findOne({email});

    if (!user) return null;

    const passMatched = await bcrypt.compare(password, user?.password);
    if (passMatched) return user;

    return null;
}