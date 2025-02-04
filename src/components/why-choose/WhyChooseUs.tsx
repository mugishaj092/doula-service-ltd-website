'use client'
import { Button } from '@nextui-org/react';
import { ShieldQuestion, SquareDashedMousePointer } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React from 'react'

const WhyChooseUs = () => {
    const router = useRouter();
    const handleButtonClick = (link: string) => {
        router.push(link);
    };
    return (
        <div>
            <div className='flex flex-col gap-8 pt-20'>
                <div>
                    <div className='flex flex-col'>
                        <span className='text-primary'>Why Choose Us</span>
                        <span className='text-4xl font-semibold'>Why Choose Us?</span>
                    </div>
                    <div className='flex gap-3 pt-3 max-sm:flex-col'>
                        <div className='flex flex-col gap-3 border border-gray-300 p-4 rounded-lg w-1/2 max-sm:w-full'>
                            <div className='flex gap-2 items-end'>
                                <div className='flex h-10 w-10 justify-center items-center bg-orange-200 border border-orange-500 text-orange-500 p-2 rounded-md'><ShieldQuestion /></div>
                                <span className='text-2xl font-semibold'>Why Choose Doula Support?</span>
                            </div>
                            <p className='text-[#64748B] font-semibold'>Research has shown that women who have continuous doula support experience:</p>
                            <ul className='pl-4 text-[#64748B] text-sm flex flex-col gap-2'>
                                <li className='flex gap-2 items-center'><span><SquareDashedMousePointer width={20} /></span>28% fewer cesarean sections</li>
                                <li className='flex gap-2 items-center'><span><SquareDashedMousePointer width={20} /></span>Shorter labor</li>
                                <li className='flex gap-2 items-center'><span><SquareDashedMousePointer width={20} /></span>Higher satisfaction with their birth experience</li>
                                <li className='flex gap-2 items-center'><span><SquareDashedMousePointer width={20} /></span>Reduced anxiety and improved emotional well-being</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-3 border border-gray-300 p-4 rounded-lg w-1/2 max-sm:w-full'>
                            <div className='flex gap-2 items-end'>
                                <div className='flex h-10 w-10 justify-center items-center bg-orange-200 border border-orange-500 text-orange-500 p-2 rounded-md'><ShieldQuestion /></div>
                                <span className='text-2xl font-semibold'>Why Doula services are crucial in Rwanda?</span>
                            </div>
                            <div className='h-full flex flex-col justify-between'>
                                <p className='text-[#64748B] font-medium text-sm'>Rwanda's health system has made significant strides since the 1994 genocide, but maternal and neonatal mortality rates remain high. The World Health Organization reports that maternal mortality in Rwanda is about 203 deaths per 100,000 live births, and neonatal mortality is 17 deaths per 1,000 live births In 2022. These figures highlight the need for personalized, continuous care for pregnant women.</p>
                                <Button type='submit' color="primary" size='lg' onClick={() => handleButtonClick('/book-now')} variant='solid' className="rounded-md">Book Your Doula Today</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs
