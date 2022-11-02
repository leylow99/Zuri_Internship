import React from 'react'

export default function Links({
    name,
    link,
    id
}) {
  return (
    <a href={link} id={id} className='w-full max-w-4xl flex  h-12  mb-4 mt-5 pt-2 rounded-md justify-center font-semibold bg-gray-300'>{name}</a>
  )
}
