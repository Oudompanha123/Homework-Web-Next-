import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import getCardData from '@/services/card-service'
import Link from 'next/link'
// import Image from "next/image";
import Image from 'next/image';


const CardComponents =  async()=> {
    const movies = await getCardData();
    // console.log(movies)
  return (
    <Carousel opts={{ align: "start",}} className="w-full">
      <CarouselContent>
        {movies.payload.map((x, index) => (
            <Link href={`/movie/${x.movie_id}`} key={index}>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <div className='card w-[350px] h-[300px] bg-white p-6 overflow-hidden'>
                            <img src={x.image ? x.image : "https://th.bing.com/th/id/OIP.jybXtt3LmeODXEhl1L1WOgHaEK?w=326&h=183&c=7&r=0&o=5&dpr=1.4&pid=1.7"} alt="" className='rounded-lg'/>  
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
