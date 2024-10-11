import CardComponents from "@/components/CardComponents";
import DataCardComponents from "@/components/DataCardComponents";
import getCardData, { getMovieByGenre } from "@/services/card-service";
import Image from "next/image";

export default async function Home() {
  const getAllMovies = await getCardData();
  // console.log(...getAllMovies.payload, "all")
  const type = [...new Set(getAllMovies.payload.map(movie => movie.genre))];
  // console.log(type)
  return (
    <>
      <div className="w-full h-svh relative">
        <img src="/img/0.webp" alt="" className="h-svh w-full object-cover absolute z-0" />
        <div className="overlay absolute w-full h-full bg-black opacity-30 z-30"></div>
      </div>

      <div className="all-movies w-full h-auto bg-red-800 p-8">
        <div className="all w-[95%] mx-auto">
          <h1 className="text-2xl text-white font-bold my-5">All Movies</h1>
          <div className="card-components">
            <CardComponents/>
          </div>
        </div>

        <div className="action w-[95%] mx-auto my-8">
          {type.map(typeMovie => (
            <>
              <h1 className="text-2xl text-white font-bold my-5">{typeMovie}</h1>
              <DataCardComponents type={typeMovie}/>
            </>
          ))}
        </div>
      </div> 
    </>
  );
}
