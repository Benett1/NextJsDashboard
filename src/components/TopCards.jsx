import React from 'react'

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
        <div className='lg:col-span-2 col-span-1 flex justify-between w-full rounded-lg bg-white p-4'>1</div>
        <div className='lg:col-span-2 col-span-1 flex justify-between w-full rounded-lg bg-white p-4'>2</div>
        <div className='rounded-lg bg-white p-4'>3</div>
    </div>
  )
}

export default TopCards