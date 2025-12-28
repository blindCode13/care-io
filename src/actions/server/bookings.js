"use server";
import { dbConnect } from "@/lib/dbConnect";

export async function postBooking(data) {
    if (!data) return {
        acknowledged: false,
        message: "No data found to post."
    }

    const dataToPost = {
        ...data,
        paymentTime: new Date().toISOString(),
        status: 'pending'
    };

    const result = await dbConnect('bookings').insertOne(dataToPost);
    return {
        ...result,
        insertedId: result?.insertedId.toString()
    }
}

export async function getBookings(userEmail) {
    if (!userEmail) return [];
    if (!userEmail.includes('@') || !userEmail.includes('.')) {
        return []
    }
    const result = await dbConnect('bookings').find({customerEmail: userEmail}).toArray();
    return result;
}