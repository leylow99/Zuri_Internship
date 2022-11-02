import React from 'react'
import Zuri from './image/logo.png'
import I4g from './image/I4G.png'

export default function () {
  return (
    <div>
        <hr className=' w-[85%] ml-24  h-3 mt-8 bg-gray-50'/>
        <div className='hidden md:flex space-x-96 mb-5'>
            <img className='ml-10 mt-4' src={Zuri} alt="izuri logo"/>
            <h3 className='mt-4 text-center text-semibold text-gray-[500]'>HNG Internship 9 Frontend Task</h3>
            <img className='mt-4 items-end' src={I4g} alt='Ingressive for Good'/>
        </div>
    </div>
  )
}
