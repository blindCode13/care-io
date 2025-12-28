"use server";

import { sendInvoiceEmail } from "@/lib/bookingInvoice";
import { dbConnect } from "@/lib/dbConnect";

export async function postBooking(data) {
  if (!data) {
    return {
      acknowledged: false,
      message: "No data found to post.",
    };
  }

  const date = new Date();

  const dataToPost = {
    ...data,
    paymentTime: date.toISOString(),
    status: "pending",
  };

  const result = await dbConnect("bookings").insertOne(dataToPost);

  if (!result?.acknowledged) {
    return {
      acknowledged: false,
      message: "Booking was not saved.",
    };
  }

  try {
    await sendInvoiceEmail({
      companyName: "Care-Io",
      customerName: data.customerName,
      customerEmail: data.customerEmail,
      bookedProduct: data.service,
      duration: data.duration,
      bookingDate: date.toLocaleDateString(),
      invoiceNumber: result.insertedId.toString(),
      totalAmount: data.amount,
    });
  } catch (error) {
    console.error("Invoice email failed:", error);
  }

  return {
    acknowledged: true,
    insertedId: result.insertedId.toString(),
  };
}


export async function getBookings(userEmail) {
    if (!userEmail) return [];
    if (!userEmail.includes('@') || !userEmail.includes('.')) {
        return []
    }
    const result = await dbConnect('bookings').find({customerEmail: userEmail}).toArray();
    return result;
}