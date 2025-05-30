import Header from "@/components/Header";
import React from "react";
import Star from "@/assets/images/star.svg";
import { Metadata, ResolvingMetadata } from "next";
import { TCity } from "@/components/Cities/types";
import thousands from "@/libs/thousands";

import {
  WeddingPackageGrid,
  WeddingPackageSlider,
} from "@/components/WeddingPackages";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";

type Request = {
  params: Promise<{
    citySlug: string;
  }>;
};

async function getData(slug: string) {
  try {
    const req = await fetch(`${process.env.HOST_API}/api/city/${slug}`, {
      method: "GET",
      cache: "no-cache",
    });

    return req.json();
  } catch (error) {
    console.log(error);
  }
}

export async function generateMetadata(
  { params }: Request,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { citySlug } = await params;

  // fetch data
  const { data: city }: { data: TCity } = await getData(citySlug);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: city.name,
    openGraph: {
      images: [`/${city.icon}`, ...previousImages],
    },
  };
}

async function DetailsCityPage({ params }: Request) {
  const { data: city }: { data: TCity } = await getData((await params).citySlug);

  return (
    <main className="flex flex-col gap-y-16">
      <Header />

      <section className="flex flex-col -mt-8">
        <div className="container mx-auto flex justify-between items-center mb-8 px-16">
          <span className="flex max-w-sm">
            <h2 className="text-4xl font-bold p-">
              Wedding Packages{" "}
              <span className="block mt-3 text-colo">in {city.name} City</span>
            </h2>
          </span>

          <span className="flex flex-col items-end gap-y-2">
            <span className="flex gap-x-1 text-color3">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </span>
            <span className="font-bold">
              ({thousands(city.weddingPackages_count)})
            </span>
          </span>
        </div>

        <WeddingPackageSlider
          data={city.weddingPackages.filter(
            (weddingPackage) => weddingPackage.isPopular === 1
          )}
        />
      </section>
      <section className="container mx-auto flex flex-col px-16">
        <div className="flex justify-center items-center mb-8">
          <h2 className="text-3xl font-bold max-w-md text-center">
            Browse Our Best Selection Wedding Packages
          </h2>
        </div>
        <WeddingPackageGrid data={city.weddingPackages} />
      </section>

      <section className="flex flex-col">
        <div className="container mx-auto flex justify-between items-center mb-8 px-16">
          <h2 className="text-3xl font-bold max-w-xs">
            Happy Stories of Our Wedding
          </h2>
          <Link
            href="/testimonials"
            className="border border-dark1 px-5 py-3 text-center rounded-full font-semibold hover:bg-color2 hover:text-light1 transition duration-300 ease-in-out hover:border-light1"
          >
            Explore All
          </Link>
        </div>
        <Testimonials />
      </section>
    </main>
  );
}

export default DetailsCityPage;
