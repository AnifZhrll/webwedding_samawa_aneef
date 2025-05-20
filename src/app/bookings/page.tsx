import Image from "next/image";
import React from "react";
import Form from "./Form";


function page() {
  return (
    <>
      <section className="absolute top-0 left-0 w-full z-10 flex h-screen">
        <div className="w-6/12 min-h-screen relative ml-auto">
          <Image
            fill
            className="w-full h-full object-cover object-center"
            src="/images/bookings-page-illustration.png"
            alt="bookings-page-illustration"
            sizes="(max-width: 768px) 100vw"
          />
        </div>
      </section>

      <section className="pt-8 container mx-auto relative z-20 flex mt-10">
        <Form />

      </section>
    </>
  );
}

export default page;
