import OurApproach from '@/components/about/approach'
import OurMission from '@/components/about/Mission'
import OurVision from '@/components/about/Vision'
import React from 'react'

const Page = () => {
  return (
    <div>
      <div className="lg:px-20 max-sm:px-0 max-md:px-10 md:px-10 py-8 max-md:py-2">
        <div className="bg-white rounded-xl shadow-lg">
          <div className="flex justify-between gap-4 max-sm:flex-wrap p-8 max-md:p-2 max-md:0">
            <OurMission />
            <OurVision />
          </div>
          <OurApproach />
        </div>
      </div>
    </div>
  )
}

export default Page
