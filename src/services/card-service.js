const getCardData = async() => {
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api')
    const data = await res.json();
    // console.log(data)
    return data;
}
export default getCardData;

export async function getMovieById(id){
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${id}`)
    const data = await res.json();
    // console.log(data)
    return data
}

export async function getMovieByGenre(genre){
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/?genre=${genre}`);
    const data = await res.json();
    // console.log(data)
    return data
}