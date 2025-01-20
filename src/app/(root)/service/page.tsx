import Services from '@/components/services/Services'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-16'>
      <div className='flex flex-col'>
        <span className='text-primary'>Our service</span>
        <span className='text-4xl font-semibold'>Services</span>
      </div>
      <Services />
    </div>
  )
}

export default page
