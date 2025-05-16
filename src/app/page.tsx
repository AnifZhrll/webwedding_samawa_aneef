import Header from "@/components/Header";
import WeddingPackagesWrapper from "@/components/WeddingPackages";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-16">
      <Header />


      <section className="">
      <WeddingPackagesWrapper show="popular" type="slider"  />
      </section>
    </main>
  ); 
}
