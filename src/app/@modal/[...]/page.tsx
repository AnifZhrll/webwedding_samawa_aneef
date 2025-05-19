import React from "react";
import { PreventScrolling, RouterBack } from "../../../components/Modal";
import Bonus from "./Bonus";

type Request = {
  searchParams: {
    modal: string;
    [key: string]: string;
  };
};

function page(request: Request) {
  
  if (request.searchParams.modal && request.searchParams.modal !== "") {
    return (
      <>
        <div className="fixed bg-black/80 z-50 inset-0 flex items-center justify-center">
          <div className="bg-white max-w-xl p-4 rounded-2xl  min-h-44 relative z-20">
            {/* catch searchParams disini untuk render modal, contoh: request.searchParams.modal === "bonus" */}

            {
              request.searchParams.modal === "bonus" && <Bonus bonusId={request.searchParams.bonusId}
              slugPackage={request.searchParams.slugPackage}/>
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

// import React from "react";
// import { PreventScrolling, RouterBack } from "../../../components/Modal";
// import Bonus from "./Bonus";
// import { useSearchParams } from "next/navigation";  // Import useSearchParams

// // Rename the component to start with an uppercase letter
// function Page() {
//   // Use the useSearchParams hook to access searchParams asynchronously
//   const searchParams = useSearchParams();  // This will ensure searchParams is properly resolved

//   // Get the modal, bonusId, and slugPackage from the searchParams
//   const modal = searchParams.get("modal");
//   const bonusId = searchParams.get("bonusId");
//   const slugPackage = searchParams.get("slugPackage");

//   // If modal is set and not empty, render the modal
//   if (modal && modal !== "") {
//     return (
//       <>
//         <div className="fixed bg-black/80 z-50 inset-0 flex items-center justify-center">
//           <div className="bg-white max-w-xl p-4 rounded-2xl min-h-44 relative z-20">
//             {/* Conditionally render the Bonus component based on modal */}
//             {modal === "bonus" && bonusId && slugPackage && (
//               <Bonus bonusId={bonusId} slugPackage={slugPackage} />
//             )}
//           </div>
//           <RouterBack />
//         </div>
//         <PreventScrolling />
//       </>
//     );
//   }

//   return null;
// }

// export default Page;


