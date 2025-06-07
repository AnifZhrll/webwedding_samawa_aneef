import React from "react";
import { TPackage, TShow } from "./types";

import Slider from "@/components/Slider";
import { getData } from "./action";

import Popular from "@/assets/images/popular.svg";
import Pinpoint from "@/assets/images/pinpoint.svg";
import HomeTown from "@/assets/images/hometown.svg";
import Image from "next/image";
import thousands from "@/libs/thousands";
import Link from "next/link";

type PropsWeddingPackagesWrapper = {
  show: TShow;
  type: "grid" | "slider";
};

export function WeddingPackageGrid({ data }: { data: TPackage[] }) {
  return (
    <div className="grid grid-cols-4 gap-7 max-sm:grid-cols-1">
      {data.map((weddingPackage) => {
        return (
          <div className="flex flex-col gap-y-4 relative" key={weddingPackage.id}>
            <Link 
              href={`/packages/${weddingPackage.slug}`}
              className="absolute inset-0 z-10">
              {/* link here */}
            </Link>
            <span className="relative h-[300px] rounded-3xl overflow-hidden">
              {weddingPackage.isPopular === 1 && (
                <span className="absolute z-10 top-5 left-5">
                <span className="bg-color1 rounded-full text-light1 inline-flex gap-x-2 items-center text-sm py-1 px-3 uppercase">
                  <Popular />
                  Popular
                </span>
              </span>
              )}
              <Image
                  fill
                  className="w-full h-full object-cover object-center"
                  src={`${process.env.HOST_API}/storage/${weddingPackage.thumbnail}`}
                  alt={weddingPackage.name}
                  sizes="(max-width: 768px) 100vw"
                />
            </span>
            <h6 className="text-xl font-bold">
              {weddingPackage.name}
            </h6>
            <span className="flex flex-col gap-[14px]">
              <span className="flex gap-x-2 items-center">
                <Pinpoint className="text-color1" />
                {weddingPackage.city.name}
              </span>
              <span className="flex gap-x-2 items-center">
                <HomeTown className="text-color1 w-5 h-5" />
                Tentram
              </span>
            </span>
            <span className="text-color2 font-bold">Rp {thousands(weddingPackage.price)}</span>
          </div>
        )
      })}
    </div>
  );
}

export function WeddingPackageSlider({ data }: { data: TPackage[] }) {

  return (
    <div className="relative">
      <Slider
        swiperClassName="w-full h-[480px] max-sm:h-[400px]"
        swiperSliderClassName="-mx-10 max-sm: px-12 xl:max-w-5xl 2xl:max-w-7xl"
      >
        {data.map((slide) => {
          return (
            <div
              key={slide.id}
              className="card-slide h-full rounded-3xl overflow-hidden relative"
            >
              <figure className="w-full h-full absolute">
                <Image
                  fill
                  className="w-full h-full object-cover object-center"
                  src={`${process.env.HOST_API}/storage/${slide.thumbnail}`}
                  alt={slide.name}
                  sizes="(max-width: 768px) 100vw"
                />
              </figure>
              <div className="card-slide-content flex flex-col items-start gap-y-5 max-sm:gap-y-3 max-sm:pl-4 max-sm:pr-2 max-sm:pb-4">
                <span className="bg-color1 rounded-full text-light1 inline-flex gap-x-2 items-center text-sm py-1 px-3 uppercase max-sm:text-xs max-sm:py-0.5 max-sm:px-2">
                  <Popular />
                  Popular
                </span>
                <span className="flex flex-col gap-y-1">
                  <h6 className="text-[28px] font-bold max-sm:text-[16px]">{slide.name}</h6>
                  <span className="text-xl text-color2 font-semibold max-sm:text-lg">
                    Rp {thousands(slide.price)}
                  </span>
                </span>
                <span className="flex gap-x-4 max-sm:gap-x-2">
                  <span className="flex gap-x-2 items-center">
                    <Pinpoint className="text-color1 max-sm:w-4 max-sm:h-4" />
                    <span className="max-sm:text-sm">{slide.city.name}</span>
                  </span>
                  <span className="flex gap-x-2 items-center">
                    <HomeTown className="text-color1 w-5 h-5 max-sm:w-4 max-sm:h-4" />
                    <span className="max-sm:text-sm">Tentram</span>
                  </span>
                </span>
                <Link
                  href={`/packages/${slide.slug}`}
                  className="flex justify-center bg-color2 py-2 w-full text-light1 rounded-full max-sm:py-1 max-sm:text-sm"
                >
                  View Package
                </Link>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

async function WeddingPackagesWrapper({
  show,
  type,
}: PropsWeddingPackagesWrapper) {
  const { data: packagesData }: { data: TPackage[] } = await getData(show);

  // Pastikan packagesData adalah array sebelum memproses
  if (!Array.isArray(packagesData) || packagesData.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        Tidak ada paket pernikahan yang tersedia saat ini.
      </div>
    );
  }

  if (type === "grid") {
    return <WeddingPackageGrid data={packagesData} />;
  }

  if (type === "slider") {
    return <WeddingPackageSlider data={packagesData} />;
  }

  return null;
}

export default WeddingPackagesWrapper;
