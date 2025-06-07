import Header from "@/components/Header";
import WeddingPackagesWrapper from "@/components/WeddingPackages";
import HomeTown from "@/assets/images/hometown.svg";
import ThumbsUp from "@/assets/images/thumbsup.svg";
import CreditCard from "@/assets/images/creditcard.svg";
import Link from "next/link";
import Cities from "@/components/Cities";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-16">
      <Header />

      <section className="-mt-8">
        <WeddingPackagesWrapper show="popular" type="slider" />
      </section>

      {/* <section className="container mx-auto flex flex-col px-16">
        <h2 className="text-3xl font-bold max-w-md mx-auto text-center mb-8">
          Alasan Mereka Memilih Wedding Package Samawa
        </h2>
        <div className="grid grid-cols-3 gap-10">
          <div className="flex flex-col border rounded-3xl p-8 gap-y-5 items-start">
            <span className="text-color2">
                <ThumbsUp />
            </span>
            <span className="flex flex-col gap-y-2">
              <h6 className="font-bold text-xl">Dipercaya Sejak 1970</h6>
              <p className="">
                Lorem ipsum dolor si amet nikah berkah dunia akhirat nantinya
              </p>
            </span>
            <Link href="#" className="text-color2 hover:underline">Learn More</Link>
          </div>
          <div className="flex flex-col border rounded-3xl p-8 gap-y-5 items-start">
            <span className="text-color2">
              <CreditCard />
            </span>
            <span className="flex flex-col gap-y-2">
              <h6 className="font-bold text-xl">Dipercaya Sejak 1970</h6>
              <p className="">
                Lorem ipsum dolor si amet nikah berkah dunia akhirat nantinya
              </p>
            </span>
            <Link href="#" className="text-color2 hover:underline">Learn More</Link>
          </div>

          <div className="flex flex-col border rounded-3xl p-8 gap-y-5 items-start">
            <span className="text-color2">
                <HomeTown className="w-12 h-12"/>
            </span>
            <span className="flex flex-col gap-y-2">
              <h6 className="font-bold text-xl">Dipercaya Sejak 1970</h6>
              <p className="">
                Lorem ipsum dolor si amet nikah berkah dunia akhirat nantinya
              </p>
            </span>
            <Link href="#" className="text-color2 hover:underline">Learn More</Link>
          </div>
        </div>
      </section> */}

      <section className="container mx-auto flex flex-col px-16 max-sm:px-8">
        <h2 className="text-3xl max-sm:text-3xl font-bold max-w-md mx-auto max-sm:mx-4 text-center mb-8">
          Alasan Mereka Memilih Wedding Package Samawa
        </h2>
        <div className="container mx-auto max-sm:px-0 px-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-3 sm:gap-8 lg:gap-10">
            <div className="flex flex-col border rounded-3xl p-6 sm:p-8 gap-y-4 sm:gap-y-5 items-start">
              <span className="text-color2">
                <ThumbsUp />
              </span>
              <span className="flex flex-col gap-y-2">
                <h6 className="font-bold text-xl sm:text-xl">
                  Dipercaya Sejak 1970
                </h6>
                <p className="text-sm sm:text-base">
                  Lorem ipsum dolor si amet nikah berkah dunia akhirat nantinya
                </p>
              </span>
              <Link
                href="#"
                className="text-color2 hover:underline text-sm sm:text-base"
              >
                Learn More
              </Link>
            </div>
            <div className="flex flex-col border rounded-3xl p-6 sm:p-8 gap-y-4 sm:gap-y-5 items-start">
              <span className="text-color2">
                <CreditCard />
              </span>
              <span className="flex flex-col gap-y-2">
                <h6 className="font-bold text-xl sm:text-xl">
                  Dipercaya Sejak 1970
                </h6>
                <p className="text-sm sm:text-base">
                  Lorem ipsum dolor si amet nikah berkah dunia akhirat nantinya
                </p>
              </span>
              <Link
                href="#"
                className="text-color2 hover:underline text-sm sm:text-base"
              >
                Learn More
              </Link>
            </div>
            <div className="flex flex-col border rounded-3xl p-6 sm:p-8 gap-y-4 sm:gap-y-5 items-start">
              <span className="text-color2">
                <HomeTown className="w-10 h-10 sm:w-12 sm:h-12" />
              </span>
              <span className="flex flex-col gap-y-2">
                <h6 className="font-bold text-xl sm:text-xl">
                  Dipercaya Sejak 1970
                </h6>
                <p className="text-sm sm:text-base">
                  Lorem ipsum dolor si amet nikah berkah dunia akhirat nantinya
                </p>
              </span>
              <Link
                href="#"
                className="text-color2 hover:underline text-sm sm:text-base"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto flex flex-col px-16 max-sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-y-4 sm:gap-y-0">
          <h2 className="text-3xl font-bold max-w-sm text-left">
            Our Latest & Best Wedding Packages
          </h2>
          <Link
            href="/packages"
            className="border border-dark1 px-5 py-3 text-center rounded-full font-semibold hover:bg-color2 hover:text-light1 transition duration-300 ease-in-out hover:border-light1"
          >
            Explore All
          </Link>
        </div>

        <WeddingPackagesWrapper show="newest" type="grid" />
      </section>

      <section className="bg-light2 py-16">
        <div className="container px-8 sm:px-32 mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-y-4 sm:gap-y-0">
            <h2 className="text-3xl font-bold max-w-sm text-left">
              Browse Packages City Recomendation
            </h2>
            <Link
              href={`${process.env.HOST_APP}/cities`}
              className="border border-dark1 px-5 py-3 text-center rounded-full font-semibold hover:bg-color2 hover:text-light1 transition duration-300 ease-in-out hover:border-light1"
            >
              Explore All
            </Link>
          </div>
          <Cities />
        </div>
      </section>

      <section className="flex flex-col">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 px-8 sm:px-16 gap-y-4 sm:gap-y-0">
          <h2 className="text-3xl font-bold max-w-xs text-left">
            Happy Stories of Our Wedding
          </h2>
          <Link
            href={`${process.env.HOST_APP}/testimonials`}
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
