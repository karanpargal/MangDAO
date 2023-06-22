import React from 'react'
import Navbar from './Navbar'



const Landing = () => {
  return (
    <div  >
   <Navbar/>
    <div className='flex bg-violet-50 w-full h-[660px] text-black text-left p-4 '>
       
        <div className='grid md:grid-cols-2 max-w-[1240px]   '>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8 '>
            <h1 className='py-3 text-3xl md:text-7xl font-bold'>
                Tagline comes here 
            </h1>
            <p className='text-2xl'>lorem isum aleit medit edbif sntd en dudb hueevc</p>
            </div>
            <div>
                <img className='' alt="IMAGE" ></img>
            </div>
           

        </div>

    </div>
    

    </div>
  )
}

export default Landing