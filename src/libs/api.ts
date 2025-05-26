// src/lib/api.ts
import { TPackage } from "@/components/WeddingPackages/types";

// Define TBooking and TPackage if they are not already globally accessible or in a shared types file
// For this example, I'm assuming TPackage is defined in "@/components/WeddingPackages/types"
// and TBooking can be defined here or in a shared types file.
export type TBooking = {
  id: number;
  name: string;
  email: string;
  proof: string;
  phone: number;
  booking_trx_id: string;
  is_paid: 0 | 1;
  total_amount: number;
  started_at: string;
  weddingPackage: TPackage;
};

export async function getBookingData(booking_trx_id: string, phone: string) {
  try {
    const formData = new FormData();
    formData.append("booking_trx_id", booking_trx_id);
    formData.append("phone", phone);

    const req = await fetch(`${process.env.HOST_API}/api/check-booking`, {
      method: "POST",
      cache: "no-cache",
      body: formData,
    });

    if (!req.ok) {
      // Handle non-2xx responses
      const errorData = await req.json();
      throw new Error(errorData.message || 'Failed to fetch booking data');
    }

    return req.json();
  } catch (error) {
    console.error("Error fetching booking data:", error);
    // Re-throw or return a specific error structure if you want to handle it in the component
    throw error;
  }
}