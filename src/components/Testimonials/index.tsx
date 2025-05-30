import React from "react";

import Slider from "@/components/Slider";
import { getData } from "./action";
import Star from "@/assets/images/star.svg";
import { TTestimonial } from "./types";
import Image from "next/image";

export function Content({ data }: { data: TTestimonial }) {
  return (
    <div className="flex flex-col border p-7 rounded-3xl gap-y-4">
      <span className="flex gap-x-1 text-color3">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </span>

      <p className="">{data.message}</p>

      <span className="flex gap-x-4 items-center">
        <span className="relative w-[80px] aspect-square rounded-full overflow-hidden">
          <Image
            fill
            className="w-full h-full object-cover object-center"
            src={`${process.env.HOST_API}/storage/${data.photo}`}
            alt={data.name}
            sizes="(max-width: 768px) 100vw"
          />
        </span>
        <span className="flex flex-col">
          <span className="text-xl font-bold">{data.name}</span>
          <span className="">{data.occupation}</span>
        </span>
      </span>
    </div>
  );
}

async function Testimonials() {
  const { data: testimonialsData }: { data: TTestimonial[] } = await getData();

  console.log(testimonialsData); // Gunakan nama variabel yang baru

  // --- PERBAIKAN PENTING: Tambahkan pengecekan jika data kosong atau tidak valid ---
  if (!Array.isArray(testimonialsData) || testimonialsData.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        Tidak ada testimoni yang tersedia saat ini.
      </div>
    );
  }

  return (
    <div className="relative pb-16">
      <Slider swiperClassName="w-full" swiperSliderClassName="!w-[340px] -mx-2 px-6">
        {testimonialsData.map((testi) => {
          return <Content key={testi.id} data={testi} />;
        })}
      </Slider>
    </div>
  );
}

export default Testimonials;
