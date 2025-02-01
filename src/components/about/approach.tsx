'use client'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation';
import React from 'react'

const OurApproach = () => {
    const router = useRouter();

    const handleButtonClick = (link: string) => {
        router.push(link);
    };
    return (
        <div className="w-full bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" stroke-linejoin="round" className="lucide lucide-equal-approximately"><path d="M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" /><path d="M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" /></svg>
                </div>
                <h2 className="text-2xl font-bold text-blue-600">Our Approach</h2>
            </div>
            <p className="text-gray-600 leading-relaxed max-md:text-left">
                We provide continuous, individualized care to mothers, from pregnancy through postpartum. This support helps women feel empowered, informed, and ready for childbirth, ultimately improving maternal health outcomes.
            </p>
            <Button type='submit' color='primary' size='lg' onClick={() => handleButtonClick('/contact')} variant='solid' className="rounded-md w-40 mt-8">Find a Doula</Button>
        </div>
    )
}

export default OurApproach
