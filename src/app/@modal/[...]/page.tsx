import React from "react";
import { PreventScrolling, RouterBack } from "../../../components/Modal";
import Bonus from "./Bonus";

interface PageProps {
  params: Promise<{
    modal?: string[];
  }>;
  searchParams: Promise<{
    modal: string;
    [key: string]: string | string[] | undefined;
    bonusId?: string;
    slugPackage?: string;
  }>;
};

async function page({ searchParams }: PageProps) {
  
  if ((await searchParams).modal && (await searchParams).modal !== "") {
    return (
      <>
        <div className="fixed bg-black/80 z-50 inset-0 flex items-center justify-center">
          <div className="bg-white max-w-xl p-4 rounded-2xl  min-h-44 relative z-20">
            {/* catch searchParams disini untuk render modal, contoh: request.searchParams.modal === "bonus" */}

            {
              (await searchParams).modal === "bonus" && <Bonus bonusId={(await searchParams).bonusId}
              slugPackage={(await searchParams).slugPackage}/>
            }
          </div>
          <RouterBack />
        </div>
        <PreventScrolling />
      </>
    );
  }

  return null;
}

export default page;



