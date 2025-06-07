import React from "react";
import { getData } from "./action";
import { TCity } from "./types";
import Image from "next/image";
import Link from "next/link";
import thousands from "@/libs/thousands";

type Props = object;

function Content({ data }: { data: TCity[] }) {
  return (
    <div className="grid grid-cols-3 gap-7 max-sm:grid-cols-1">
      {data.map((city) => {
        return (
          <div
            className="flex border border-transparent hover:border-color2 transition-colors duration-300 bg-light1 p-5 rounded-3xl items-center gap-x-5 relative "
            key={city.id}
          >
            <span className="relative w-[80px] aspect-square rounded-3xl overflow-hidden">
              <Image
                fill
                className="w-full h-full object-cover object-center"
                src={`${process.env.HOST_API}/storage/${city.icon}`}
                alt={city.name}
                sizes="(max-width: 768px) 100vw"
              />
            </span>
            <span className="flex flex-col">
              <span className="text-xl font-bold">{city.name}</span>
              <span className="">{thousands(city.weddingPackages_count)} Package{city.weddingPackages_count > 1 && "s"}</span>
            </span>
            <Link href={`/cities/${city.slug}`} className="absolute inset-0">
              {/* <!-- link here --> */}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

async function Cities({}: Props) {
  const { data: citiesData }: { data: TCity[] } = await getData();

  console.log(citiesData); // Gunakan citiesData di console.log Anda
  if (citiesData.length === 0) {
    return "No data found"; // Anda bisa ganti ini dengan komponen fallback yang lebih baik
  }

  return <Content data={citiesData} />;
}

export default Cities;
