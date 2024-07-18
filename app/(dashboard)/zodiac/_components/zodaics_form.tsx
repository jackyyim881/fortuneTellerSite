// "use client";

// import CardComponent from "@/components/ui/Card";
// import { useState } from "react";

// export default function ZodaicsPageInfo({
//   name,
//   data,
// }: {
//   name: string;
//   data: any;
// }) {
//   return (
//     <div className="p-4">
//       <h1 className="text__title">生肖</h1>
//       <div className="mt-2">
//         {/* <EditComponent isEditing={isEditing} toggleEditing={toggleEditing} /> */}
//       </div>
//       <div className="bg-white  font-thin mt-6 rounded-md shadow-lg">
//         {data?.map((zodiac: any) => {
//           return (
//             <div key={zodiac.id} className="text-2xl p-4 ml-4 *:py-2 ">
//               <div className="text-4xl  font-bold rounded-md">
//                 <h1 className="">{zodiac.name}</h1>
//               </div>
//               <div className="*:p-2">
//                 <p>
//                   元素 &nbsp;
//                   {zodiac.element}
//                 </p>
//                 <p>陰陽 &nbsp;{zodiac.yinYang}</p>
//                 <p>幸運數字 &nbsp;{zodiac.luckyNumbers.join(" , ")}</p>
//                 <p>幸運顏色 &nbsp;{zodiac.luckyColors.join(" , ")}</p>
//                 <p>幸運花卉 &nbsp;{zodiac.luckyFlowers.join(" , ")}</p>
//                 <p>性格特點 &nbsp;{zodiac.personalityTraits.join(" , ")}</p>
//                 <p>相容星座 &nbsp;{zodiac.compatibleSigns.join(" , ")}</p>
//                 <p>不相容星座 &nbsp;{zodiac.incompatibleSigns.join(" , ")}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
