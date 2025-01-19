import OurMission from '@/components/about/Mission'
import OurVision from '@/components/about/Vision'
import React from 'react'

const Page = () => {
  return (
    <div>
          <div className="lg:px-20 max-sm:px-5 max-md:px-10 md:px-10 py-8">
              <div className="bg-white rounded-xl shadow-lg">
                  <div className="flex justify-between gap-4 max-sm:flex-wrap p-8">
                      <OurMission />
                      <OurVision />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Page
