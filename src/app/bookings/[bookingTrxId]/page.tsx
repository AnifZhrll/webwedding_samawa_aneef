import React from "react";
import ArrowDown from "@/assets/images/arrow-down.svg";
import IconUser from "@/assets/images/user.svg";
import IconEnvelope from "@/assets/images/envelope.svg";
import IconPhone from "@/assets/images/phone.svg";
import IconCalendar from "@/assets/images/calendar.svg";
import Image from "next/image";
import IconReceipt from "@/assets/images/receipt.svg";
import IconComments from "@/assets/images/comments.svg";
import IconCardShield from "@/assets/images/card-shield.svg";

import { Content as ContentBonus } from "@/components/Bonus";
import thousands from "@/libs/thousands";
import { Content as ContentOrganizer } from '@/components/Organizer';
import { getBookingData, type TBooking } from "@/libs/api";

type Request = {
  params: Promise<{
    bookingTrxId: string;
  }>;
  searchParams: Promise<{
    phone: string;
  }>;
};

// type TBooking = {
//   id: number;
//   name: string;
//   email: string;
//   proof: string;
//   phone: number;
//   booking_trx_id: string;
//   is_paid: 0 | 1;
//   total_amount: number;
//   started_at: string;
//   weddingPackage: TPackage;
// };

async function BookingFoundPage({ params, searchParams }: Request) {
  const bookingTrxId = (await params).bookingTrxId;
  const phone = (await searchParams).phone;

  const { data }: { data: TBooking } = await getBookingData(
    bookingTrxId,
    phone
  );

  return (
    <section className="container mx-auto flex flex-col gap-y-4">
      <h2 className="text-3xl font-bold">Booking #{(await params).bookingTrxId}</h2>

      <div className="flex gap-x-12">
        <div className="w-8/12">
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-5 bg-white rounded-2xl p-7">
              <input
                type="checkbox"
                name="accordion"
                id="customer-information"
                className="peer hidden"
                defaultChecked
              />
              <label
                htmlFor="customer-information"
                className="flex justify-between [--state-rotate:0deg] peer-checked:[--state-rotate:180deg]"
              >
                <h6 className="text-xl font-bold">Customer Information</h6>
                <span className="text-color2 flex items-center justify-center transition-all duration-300 [rotate:var(--state-rotate)]">
                  <ArrowDown />
                </span>
              </label>
              <div className="flex flex-col gap-y-5 max-h-0 overflow-hidden transition-all duration-300 h-full peer-checked:max-h-screen">
                <hr />
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col w-full gap-y-2">
                    <label htmlFor="fullname">Full Name</label>
                    <div className="flex relative">
                      <span className="absolute left-0 bottom-0 top-0 aspect-square flex items-center justify-center text-color2">
                        <IconUser />
                      </span>
                      <input
                        type="text"
                        className="pl-10 w-full py-3 pr-4 border border-light3 focus:outline-none focus:border-color2 rounded-full"
                        name="fullname"
                        id="fullname"
                        placeholder="Write your complete name"
                        defaultValue={data.name}
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full gap-y-2">
                    <label htmlFor="email">Email Address</label>
                    <div className="flex relative">
                      <span className="absolute left-0 bottom-0 top-0 aspect-square flex items-center justify-center text-color2">
                        <IconEnvelope />
                      </span>
                      <input
                        type="email"
                        className="pl-10 w-full py-3 pr-4 border border-light3 focus:outline-none focus:border-color2 rounded-full"
                        name="email"
                        id="email"
                        placeholder="Write your complete email"
                        defaultValue={data.email}
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full gap-y-2">
                    <label htmlFor="phonenumber">Phone Number</label>
                    <div className="flex relative">
                      <span className="absolute left-0 bottom-0 top-0 aspect-square flex items-center justify-center text-color2">
                        <IconPhone />
                      </span>
                      <input
                        type="tel"
                        className="pl-10 w-full py-3 pr-4 border border-light3 focus:outline-none focus:border-color2 rounded-full"
                        name="phonenumber"
                        id="phonenumber"
                        placeholder="Let us know your number"
                        defaultValue={data.phone}
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full gap-y-2">
                    <label htmlFor="date">Started At</label>
                    <div className="flex relative">
                      <span className="absolute left-0 bottom-0 top-0 aspect-square flex items-center justify-center text-color2">
                        <IconCalendar />
                      </span>
                      <input
                        type="date"
                        className="pl-10 appearance-none w-full py-3 pr-4 border border-light3 focus:outline-none focus:border-color2 rounded-full"
                        name="date"
                        id="date"
                        placeholder="Write your complete date"
                        defaultValue={data.started_at}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-5 bg-white rounded-2xl p-7">
              <input
                type="checkbox"
                name="accordion"
                id="wedding-bonus"
                className="peer hidden"
                defaultChecked
              />
              <label
                htmlFor="wedding-bonus"
                className="flex justify-between [--state-rotate:0deg] peer-checked:[--state-rotate:180deg]"
              >
                <h6 className="text-xl font-bold">Wedding Bonus Package</h6>
                <span className="text-color2 flex items-center justify-center transition-all duration-300 [rotate:var(--state-rotate)]">
                  <ArrowDown />
                </span>
              </label>
              <div className="flex flex-col gap-y-5 max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen">
                <hr />
                {data.weddingPackage.weddingBonusPackages.map((bonus) => {
                  return (
                    <ContentBonus
                      key={bonus.bonusPackage.id}
                      data={bonus.bonusPackage}
                      slugPackage={data.weddingPackage.slug}
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-y-5 bg-white rounded-2xl p-7">
              <input
                type="checkbox"
                name="accordion"
                id="payment-details"
                className="peer hidden"
                defaultChecked
              />
              <label
                htmlFor="payment-details"
                className="flex justify-between [--state-rotate:0deg] peer-checked:[--state-rotate:180deg]"
              >
                <h6 className="text-xl font-bold">Payment Details</h6>
                <span className="text-color2 flex items-center justify-center transition-all duration-300 [rotate:var(--state-rotate)]">
                  <ArrowDown />
                </span>
              </label>
              <div className="flex flex-col gap-y-5 max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen">
                <hr />
                <div className="flex items-center gap-x-3">
                  <span className="text-color2">
                    <IconReceipt />
                  </span>
                  <span className="">Status Transaction</span>
                  {
                    data.is_paid === 1 ? <span className="font-semibold text-light1 ml-auto bg-color4 rounded-full py-1 px-3 uppercase">
                    Success
                  </span> 
                  : <span className="font-semibold text-light1 ml-auto bg-color3 rounded-full py-1 px-3 uppercase">
                  Pending
                </span>
                  }
                  
                </div>

                <div className="flex items-center gap-x-3">
                  <span className="text-color2">
                    <IconReceipt />
                  </span>
                  <span className="">Package Quantity</span>
                  <span className="font-bold ml-auto">1 Wedding Package</span>
                </div>

                <div className="flex items-center gap-x-3">
                  <span className="text-color2">
                    <IconComments />
                  </span>
                  <span className="">Consultation & Insurance</span>
                  <span className="font-bold ml-auto">Rp 0 (Free)</span>
                </div>

                <div className="flex items-center gap-x-3">
                  <span className="text-color2">
                    <IconCardShield />
                  </span>
                  <span className="">Grand Total Amount</span>
                  <span className="font-bold text-xl text-color2 ml-auto">
                    Rp {thousands(data.total_amount)}
                  </span>
                </div>
                <hr />

                <h6 className="text-xl font-bold">Proof of Payment</h6>

                <span className="relative w-[390px] aspect-video rounded-2xl overflow-hidden">
                  <Image
                    fill
                    className="w-full h-full object-cover object-center"
                    src={`${process.env.HOST_API}/storage/${data.proof}`}
                    alt={`Proof payment booking trx id #${data.booking_trx_id}`}
                    sizes="(max-width: 768px) 100vw"
                  />
                </span>

                <a
                  href="#"
                  className="bg-color2 text-light1 font-semibold gap-x-2 flex items-center justify-center py-3 rounded-full w-full"
                >
                  <span>Contact Customer Service</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-4/12">
          <div className="sticky top-8">
            <div className="bg-light1 p-7 flex flex-col gap-y-5 rounded-2xl">
              <h6 className="text-2xl font-bold">
                Nikah Muda Abadi Pantai Bali Indah Sejahtera
              </h6>
              <span className="relative w-full aspect-video rounded-2xl overflow-hidden">
                <Image
                  fill
                  className="w-full h-full object-cover object-center"
                  src={`${process.env.HOST_API}/storage/${data.weddingPackage.thumbnail}`}
                  alt={data.weddingPackage.name}
                  sizes="(max-width: 768px) 100vw"
                />
              </span>

              <h6 className="font-bold">Wedding Organizer</h6>
                <ContentOrganizer data={data.weddingPackage.weddingOrganizer}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingFoundPage;
