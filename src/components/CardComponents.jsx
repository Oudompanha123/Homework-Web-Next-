import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import getCardData from '@/services/card-service'
import Link from 'next/link'
const CardComponents =  async()=> {
    const movies = await getCardData();
    // console.log(movies)
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {movies.payload.map((x) => (
            <Link href={`/movie/${x.movie_id}`}>
                <CarouselItem key={x.movie_id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <div className='card w-[350px] h-[300px] bg-white p-6 overflow-hidden'>
                            <img src={x.image ? x.image : "https://k-luv.leonparenzo.com/wp-content/uploads/2020/06/these-are-the-best-20-k-dramas-that-are-on-netflix-right-now-according-to-fans-14.jpg"} alt="" className='rounded-lg'/>  
                            <div className='title-card mt-2'>
                                <h1 className='font-bold text-2xl line-clamp-3'>{x.movie_title}</h1>
                                <p className='line-clamp-3'>{x.description}</p>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
            </Link>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CardComponents
