"use client";

import { TPackage } from "@/components/WeddingPackages/types";
import ArrowDown from "@/assets/images/arrow-down.svg";
import IconUser from "@/assets/images/user.svg";
import IconEnvelope from "@/assets/images/envelope.svg";
import IconPhone from "@/assets/images/phone.svg";
import IconCalendar from "@/assets/images/calendar.svg";
import IconUserShield from "@/assets/images/user-shield.svg";
import IconReceipt from "@/assets/images/receipt.svg";
import IconCurrencyDollar from "@/assets/images/currency-dollar.svg";
import IconTax from "@/assets/images/tax.svg";
import IconComments from "@/assets/images/comments.svg";
import IconCardShield from "@/assets/images/card-shield.svg";
import IconWallet from "@/assets/images/wallet.svg";
import IconCreditCard from "@/assets/images/credit-card.svg";
import IconVoucher from "@/assets/images/voucher.svg";
import LogoBca from "@/assets/images/logo-bca.svg";
import IconVerified from "@/assets/images/verified.svg";
import LogoMandiri from "@/assets/images/logo-mandiri.svg";
import IconNotesProof from "@/assets/images/notes-proof.svg";
import { useFormStatus } from "react-dom";
import { booking } from "./action";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";
import thousands from "@/libs/thousands";

type Props = {
  data: TPackage;
};


interface FormState {
  message: string;
  status: 400 | 200;
}

const initialState: FormState = {
  message: "",
  status: 200,
};

function Form({ data }: Props) {
  const { pending } = useFormStatus();

  const [state, formAction] = useActionState<FormState, FormData>(booking, initialState);

  const tax = data.price * 0.11;
  const grandTotal = data.price + tax;

  useEffect(() => {
    if (state.status === 400) {
      toast.error(state.message);
    }
  }, [state]);

  console.log({ pending, state });

  return (
    <form action={formAction}>
      <input type="hidden" value={data.slug} name="slug" />
      <input type="hidden" value={data.id} name="wedding_package_id" />
      <input type="hidden" value={data.price} name="price" />
      <input type="hidden" value={grandTotal} name="total_amount" />
      <input type="hidden" value={tax} name="total_tax_amount" />

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
                <label htmlFor="name">Full Name</label>
                <div className="flex relative">
                  <span className="absolute left-0 bottom-0 top-0 aspect-square flex items-center justify-center text-color2">
                    <IconUser />
                  </span>
                  <input
                    type="text"
                    className="pl-10 w-full py-3 pr-4 border border-light3 focus:outline-none focus:border-color2 rounded-full"
                    name="name"
                    id="name"
                    placeholder="Write your complete name"
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
                  />
                </div>
              </div>

              <div className="flex flex-col w-full gap-y-2">
                <label htmlFor="phone">Phone Number</label>
                <div className="flex relative">
                  <span className="absolute left-0 bottom-0 top-0 aspect-square flex items-center justify-center text-color2">
                    <IconPhone />
                  </span>
                  <input
                    type="tel"
                    className="pl-10 w-full py-3 pr-4 border border-light3 focus:outline-none focus:border-color2 rounded-full"
                    name="phone"
                    id="phone"
                    placeholder="Let us know your number"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full gap-y-2">
                <label htmlFor="started_at">Started At</label>
                <div className="flex relative">
                  <span className="absolute left-0 bottom-0 top-0 aspect-square flex items-center justify-center text-color2">
                    <IconCalendar />
                  </span>
                  <input
                    type="date"
                    className="pl-10 appearance-none w-full py-3 pr-4 border border-light3 focus:outline-none focus:border-color2 rounded-full"
                    name="started_at"
                    id="started_at"
                    placeholder="Write your complete date"
                  />
                </div>
              </div>
            </div>

            <hr />

            <span className="flex items-center gap-x-2">
              <IconUserShield className="text-color4" />

              <span>{} X is protecting your privacy better</span>
            </span>
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
              <span className="">Package Quantity</span>
              <span className="font-bold ml-auto">1 Wedding Package</span>
            </div>

            <div className="flex items-center gap-x-3">
              <span className="text-color2">
                <IconCurrencyDollar />
              </span>
              <span className="">Package Price (1x)</span>
              <span className="font-bold ml-auto">Rp {thousands(data.price)}</span>
            </div>

            <div className="flex items-center gap-x-3">
              <span className="text-color2">
                <IconTax />
              </span>
              <span className="">Country Tax 11%</span>
              <span className="font-bold ml-auto">Rp {thousands(tax)}</span>
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
                Rp {thousands(grandTotal)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-5 bg-white rounded-2xl p-7">
          <input
            type="checkbox"
            name="accordion"
            id="proceed-payment"
            className="peer hidden"
            defaultChecked
          />
          <label
            htmlFor="proceed-payment"
            className="flex justify-between [--state-rotate:0deg] peer-checked:[--state-rotate:180deg]"
          >
            <h6 className="text-xl font-bold">Proceed Payment to</h6>
            <span className="text-color2 flex items-center justify-center transition-all duration-300 [rotate:var(--state-rotate)]">
              <ArrowDown />
            </span>
          </label>
          <div className="flex flex-col gap-y-5 max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen">
            <hr />

            <div className="flex gap-x-5">
              <button
                type="button"
                className="border border-color2 gap-x-2 flex items-center justify-center py-3 rounded-full w-full"
              >
                <IconWallet className="text-color2" />

                <span>Bank Transfer</span>
              </button>

              <button
                type="button"
                className="border border-light3 gap-x-2 flex items-center justify-center py-3 rounded-full w-full"
              >
                <IconCreditCard className="text-color2" />

                <span>Credit Card</span>
              </button>

              <button
                type="button"
                className="border border-light3 gap-x-2 flex items-center justify-center py-3 rounded-full w-full"
              >
                <IconVoucher className="text-color2" />

                <span>Redeem Points</span>
              </button>
            </div>

            <div className="flex gap-x-5">
              <div className="w-6/12 flex gap-x-4 items-center">
                <LogoBca />
                <span className="flex flex-col">
                  <span className="flex gap-x-2">
                    <span className="font-semibold">Samawa Indonesia</span>
                    <IconVerified className="text-color4" />
                  </span>
                  <span>8008129839</span>
                </span>
              </div>

              <div className="w-6/12 flex gap-x-4 items-center">
                <LogoMandiri />

                <span className="flex flex-col">
                  <span className="flex gap-x-2">
                    <span className="font-semibold">Samawa Indonesia</span>
                    <IconVerified className="text-color4" />
                  </span>
                  <span>12379834983281</span>
                </span>
              </div>
            </div>

            <hr />

            <div className="flex flex-col w-full gap-y-2">
              <label htmlFor="proof" className="text-xl font-bold">
                Upload Proof of Payment
              </label>
              <div className="flex relative">
                <span className="absolute left-0 bottom-0 top-0 aspect-square flex items-center justify-center text-color2">
                  <IconNotesProof />
                </span>
                <input
                  type="file"
                  className="pl-10 block file:hidden appearance-none w-full py-3 pr-4 border border-light3 focus:outline-none focus:border-color2 rounded-full"
                  name="proof"
                  id="proof"
                  placeholder="Add an attachment"
                />
              </div>
            </div>
            <hr />

            <div className="flex gap-x-5">
              <button
                type="button"
                className="border border-dark1 gap-x-2 flex items-center font-semibold justify-center py-3 rounded-full w-full"
              >
                <span>Save as a Wishlist</span>
              </button>
              <button
                disabled={pending}
                aria-disabled={pending}
                type="submit"
                className={[
                  "font-semibold gap-x-2 flex items-center justify-center py-3 rounded-full w-full",
                  pending
                    ? "bg-color2/25 text-gray-600 pointer-events-none cursor-not-allowed"
                    : "bg-color2 text-light1",
                ].join(" ")}
              >
                <span>Confirm Payment</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
