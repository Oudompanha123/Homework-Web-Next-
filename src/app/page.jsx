import CardComponents from "@/components/CardComponents";
import DataCardComponents from "@/components/DataCardComponents";
import getCardData from "@/services/card-service";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <div className="w-full h-svh relative">
        <img src="/img/0.webp" alt="" className="h-svh w-full object-cover absolute" />
        <div className="overlay absolute w-full h-full bg-black opacity-30 z-30"></div>
      </div>

      <div className="all-movies w-full h-auto bg-red-800 p-8">
        <div className="all w-[95%] mx-auto">
          <h1 className="text-2xl text-white font-bold my-5">All Movies</h1>
          <div className="card-components">
            <CardComponents/>
          </div>
        </div>

        {/* <div className="action w-[95%] mx-auto my-8">
          <h1 className="text-2xl text-white font-bold">Action Movies</h1>
          <DataCardComponents/>
        </div> */}
      </div> 
    </>
  );
}
