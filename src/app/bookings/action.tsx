"use server";

import { redirect } from "next/navigation";

export async function checkBooking(prevState: Record<string, unknown>, formData: FormData) {

  if (formData.get("phone") === "")
    return {
      message: "Phone Number is required",
      status: 400,
    };

  if (formData.get("booking_trx_id") === "")
    return {
      message: "Booking ID is required",
      status: 400,
    };


  return redirect(
    `/bookings/${formData.get("booking_trx_id")}?phone=${formData.get("phone")}`
  );
}
