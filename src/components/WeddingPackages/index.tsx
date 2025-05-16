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

function WeddingPackageSlider({ data }: { data: TPackage[] }) {

  return (
    <div className="relative">
      <Slider
        swiperClassName="w-full h-[480px]"
        swiperSliderClassName="-mx-10 px-12 xl:max-w-5xl 2xl:max-w-7xl"
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
                  src={`${process.env.HOST_API}/${slide.thumbnail}`}
                  alt={slide.name}
                  sizes="(max-width: 768px) 100vw"
                />
              </figure>
              <div className="card-slide-content flex flex-col items-start gap-y-5">
                <span className="bg-color1 rounded-full text-light1 inline-flex gap-x-2 items-center text-sm py-1 px-3 uppercase">
                <Popular />
                  Popular
                </span>
                <span className="flex flex-col gap-y-1">
                  <h6 className="text-[28px] font-bold">
                    {slide.name}
                  </h6>
                  <span className="text-xl text-color2 font-semibold">
                    Rp {
                        thousands(slide.price)
                    }
                  </span>
                </span>
                <span className="flex gap-x-4">
                  <span className="flex gap-x-2 items-center">
                    <Pinpoint className="text-color1"/>
                    {slide.city.name}
                  </span>
                  <span className="flex gap-x-2 items-center">
                    <HomeTown className="text-color1 w-5 h-5"/>
                    Tentram
                  </span>
                </span>
                <Link
                  href={`${process.env.HOST_APP}/packages/${slide.slug}`}
                  className="flex justify-center bg-color2 py-2 w-full text-light1 rounded-full"
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
  const { data }: { data: TPackage[] } = await getData(show);

  if (type === "grid") {
    return <div className="">Grid</div>;
  }

  if (type === "slider") {
    return <WeddingPackageSlider data={data} />;
  }

  return null;
}

export default WeddingPackagesWrapper;
