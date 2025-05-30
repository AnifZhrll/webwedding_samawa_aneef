"use client";

import React, { useState } from "react";
import Popular from "@/assets/images/popular.svg";
import DownloadFile from "@/assets/images/download-file.svg";
import Play360 from "@/assets/images/play360.svg";
import Image from "next/image";

type Props = {
  title: string;
  data: { id: number; photo: string }[];
  isPopular: boolean;
};

function Slides({ data, title, isPopular }: Props) {
  const photos = data.slice(0, 3);

  const [current, currentSet] = useState(photos[0].id);

  const currentPhoto = photos.find((photo) => photo.id === current);

  return (
    <div className="grid grid-cols-4 gap-5 grid-rows-3 h-[550px]">
      <div className="col-span-3 row-span-3">
        <span className="flex relative w-full h-full rounded-2xl overflow-hidden">
          {isPopular && (
            <span className="absolute z-10 top-5 left-5">
              <span className="bg-light1 rounded-full inline-flex gap-x-2 items-center text-sm py-1 px-3 font-bold uppercase">
                <span className="text-color2">
                  <Popular />
                </span>
                Popular
              </span>
            </span>
          )}

          <span className="absolute z-10 bottom-5 left-5">
            <span className="bg-light1 rounded-full inline-flex gap-x-2 items-center text-sm py-1 px-3 font-bold uppercase">
              <span className="text-color2">
                <DownloadFile />
              </span>
              BROCHURE .PDF
            </span>
          </span>

          <span className="absolute z-10 bottom-5 right-5">
            <span className="bg-light1 rounded-full inline-flex gap-x-2 items-center text-sm py-1 px-3 font-bold uppercase">
              <span className="text-color2">
                <Play360 />
              </span>
              VIRTUAL 360
            </span>
          </span>

          <Image
            fill
            className="w-full h-full object-cover object-center"
            src={`${process.env.NEXT_PUBLIC_HOST_API}/storage/${currentPhoto?.photo}`}
            alt={`${title} 0`}
            sizes="(max-width: 768px) 100vw"
          />
        </span>
      </div>

      {photos.map((photo) => {
        return (
          <div
            key={photo.id}
            className="border-2 cursor-pointer border-transparent hover:border-color2 
            rounded-2xl overflow-hidden"
            onClick={() => {
              currentSet(photo.id);
            }}
          >
            <span className="flex relative w-full h-full">
              <Image
                fill
                className="w-full h-full object-cover object-center"
                src={`${process.env.NEXT_PUBLIC_HOST_API}/storage/${photo.photo}`}
                alt={`${title}-${photo.photo}`}
                sizes="(max-width: 768px) 100vw"
              />
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Slides;
