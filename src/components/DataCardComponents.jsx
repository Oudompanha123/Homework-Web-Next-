import React from 'react'

function DataCardComponents() {
  return (
    <div className="card-group grid grid-cols-4 w-[90%] space-x-4 my-4">
        <div className='card w-[350px] h-[300px] bg-white p-3'>
            <img src="./img/0.webp" alt="" className='rounded-lg'/>  
            <div className='title-card mt-2'>
                <h1 className='font-bold text-2xl'>True Beauty</h1>
                <p>When the menace known as the joker wreak havoc and chaos...</p>
            </div>
        </div>
    </div>
  )
}

export default DataCardComponents