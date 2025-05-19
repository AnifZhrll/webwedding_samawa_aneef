"use server";

import { redirect } from "next/navigation";

interface File {
  size: number;
  type: string;
  name: string;
  lastModified: number;
}

export async function booking(prevState: any, formData: FormData) {
  if (formData.get("name") === "")
    return {
      message: "Name is required",
      status: 400,
    };

  if (formData.get("email") === "")
    return {
      message: "Email is required",
      status: 400,
    };

  if (formData.get("phone") === "")
    return {
      message: "Phone Number is required",
      status: 400,
    };

  if (formData.get("started_at") === "")
    return {
      message: "Select a start date",
      status: 400,
    };

  const proof = formData.get("proof") as File;
  if (!proof || proof.size === 0)
    return {
      message: "Select proof of payment",
      status: 400,
    };

  const res = await fetch(`${process.env.HOST_API}/api/booking-transaction`, {
    method: "POST",
    body: formData,
  });
  
  console.log(res);

  const data = await res.json();

  console.log(data);

  return redirect(
    `/packages/${formData.get("slug")}/checkout/success?bookingId=${
      data.data.booking_trx_id
    }`
  );
}
