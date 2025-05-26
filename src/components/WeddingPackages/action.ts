// src/components/WeddingPackages/action.ts
"use server"; // Penting untuk Server Action

import { TPackage, TShow } from "./types";

// --- PERBAIKAN PENTING: DEKLARASIKAN FUNGSI MENGEMBALIKAN OBJEK DENGAN PROPERTI 'DATA' ---
export async function getData(show: TShow): Promise<{ data: TPackage[] }> { // <-- Ubah tipe kembalian di sini
    try {
        let url = `${process.env.HOST_API}/api/wedding-packages`;
        if (show === "popular") { // Tambahkan kurung kurawal untuk blok if
            url = `${process.env.HOST_API}/api/wedding-packages/popular`;
        }

        const res = await fetch(url, {
            method: "GET",
            cache: "no-cache", // Ini akan membuat halaman dinamis (SSR)
        });

        // --- PENTING: Periksa apakah respons berhasil ---
        if (!res.ok) {
            console.error(`Gagal mengambil data paket pernikahan: ${res.status} ${res.statusText} dari URL: ${url}`);
            return { data: [] }; // <<< PENTING: Selalu kembalikan OBJEK dengan array kosong jika fetch gagal
        }

        const responseData = await res.json(); // Mengambil data mentah dari respons JSON

        // --- PENTING: Verifikasi format respons API dan ekstrak/kembalikan 'data' ---
        if (typeof responseData === 'object' && responseData !== null && 'data' in responseData && Array.isArray(responseData.data)) {
            return responseData as { data: TPackage[] }; // <<< Kembalikan OBJEK utuh jika sesuai format { data: [...] }
        } else {
            // Log error jika format respons API tidak seperti yang diharapkan
            console.error("Format respons API paket pernikahan tidak sesuai harapan. Diharapkan { data: [...] } tetapi menerima:", responseData);
            return { data: [] }; // <<< Kembalikan OBJEK dengan array kosong jika format tidak sesuai
        }

    } catch (error) {
        // --- PENTING: Tangani error jaringan atau lainnya ---
        console.error("Error saat fetching data paket pernikahan:", error);
        return { data: [] }; // <<< Selalu kembalikan OBJEK dengan array kosong jika ada error
    }
}