import Book from '@/components/Book'
import React from 'react'

const Page = () => {
  return (
    <div className='w-full flex justify-center items-center'>
        <div className='w-1/2 max-md:w-full bg-[#edeaf0] p-4 flex flex-col gap-4 rounded-lg shadow-md'>
            <h1 className="text-2xl font-bold mb-4">Book Our Services</h1>
              <p className='text-gray-600 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dolor doloremque odio commodi optio minus! Impedit animi assumenda voluptatem sapiente inventore dicta eum cum suscipit vitae illo. Voluptatibus, ducimus ab.</p>
            <div>
                <Book />
            </div>
        </div>
    </div>
  )
}

export default Page
