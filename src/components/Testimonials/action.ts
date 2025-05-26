// src/components/Testimonials/action.ts
"use server";

import { TTestimonial } from "./types";

// --- PERBAIKAN PENTING: DEKLARASIKAN FUNGSI MENGEMBALIKAN OBJEK DENGAN PROPERTI 'DATA' ---
export async function getData(): Promise<{ data: TTestimonial[] }> { // <-- Ubah tipe kembalian di sini
    try {
        const res = await fetch(`${process.env.HOST_API}/api/wedding-testimonials`, {
            method: "GET",
            cache: "no-cache", // Ini membuat halaman dinamis (SSR)
        });

        // --- PENTING: Periksa apakah respons berhasil ---
        if (!res.ok) {
            console.error(`Gagal mengambil data testimonial: ${res.status} ${res.statusText}`);
            return { data: [] }; // <<< PENTING: Selalu kembalikan OBJEK dengan array kosong jika fetch gagal
        }

        const responseData = await res.json();

        // --- PENTING: Verifikasi format respons API dan ekstrak/kembalikan 'data' ---
        // Jika API mengembalikan { data: [...] }
        if (typeof responseData === 'object' && responseData !== null && 'data' in responseData && Array.isArray(responseData.data)) {
            return responseData as { data: TTestimonial[] }; // <<< Kembalikan OBJEK utuh jika sesuai format
        } else {
            // Log error jika format respons API tidak seperti yang diharapkan
            console.error("Format respons API testimonial tidak sesuai harapan. Diharapkan { data: [...] } tetapi menerima:", responseData);
            return { data: [] }; // <<< Kembalikan OBJEK dengan array kosong jika format tidak sesuai
        }

    } catch (error) {
        // --- PENTING: Tangani error jaringan atau lainnya ---
        console.error("Error saat fetching data testimonial:", error);
        return { data: [] }; // <<< Selalu kembalikan OBJEK dengan array kosong jika ada error
    }
}