import { TPackage } from "@/components/WeddingPackages/types";
import { Content as ContentTestimonial } from "@/components/Testimonials";
import { Content as ContentOrganizer } from "@/components/Organizer";
import React from "react";
import { getData } from "../action";
import Image from "next/image";
import thousands from "@/libs/thousands";
import Form from "./Form";

type Request = {
    params: {
      packageSlug: string;
    };
  };
  

async function PackageCheckoutPage({params}: Request) {

      const { data: details }: { data: TPackage } = await getData(
        params.packageSlug
    );

  return (
    <section className="container mx-auto flex flex-col gap-y-4">
        <h2 className="text-3xl font-bold">Checkout Package</h2>

        <div className="flex gap-x-12">
          <div className="w-8/12">
          <Form data={details}/>
          </div>
          <div className="w-4/12">
          <div className="sticky top-8">
              <div className="bg-light1 p-7 flex flex-col gap-y-5 rounded-2xl">
                <h6 className="text-2xl font-bold">
                  {details.name}
                </h6>
                <span
                  className="relative w-full aspect-video rounded-2xl overflow-hidden"
                >
        <Image
          fill
          className="w-full h-full object-cover object-center"
          src={`${process.env.NEXT_PUBLIC_HOST_API}/${details.thumbnail}`}
          alt={details.name}
          sizes="(max-width: 768px) 100vw"
        />
                </span>

                <h6 className="text-2xl text-color2 font-bold">Rp {thousands(details.price)}</h6>
                <hr />
                <h6 className="font-bold">Happy Story</h6>
                {
                    details.weddingTestimonials.length > 0 ? 
                    <ContentTestimonial data={details.weddingTestimonials[0]} />
                    : "Belum ada testimonial"
                }


                <hr />
              <ContentOrganizer data={details.weddingOrganizer}/>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default PackageCheckoutPage;
