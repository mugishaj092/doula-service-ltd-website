'use client'
import { images } from '@/utils/constant/images'
import { Button } from '@nextui-org/react'
import { CircleCheckBig } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
    return (
        <div className='w-full flex justify-between'>
            <div className='w-1/2 flex flex-col justify-center gap-4 h-[70vh]'>
                <h1 className='text-5xl font-semibold text-primary'>Empowering Mothers, Transforming Lives</h1>
                <p className='text-lg text-dark'>Providing compassionate support for every step of your maternal journey. Together, we ensure safer, healthier, and happier birth experiences.</p>
                <div className='flex justify-between'>
                    <div className='flex gap-3 items-end text-lg'>
                        <CircleCheckBig size={30} strokeWidth={2.5} className=' font-bold' />
                        <span className='font-semibold '>Safer</span>
                    </div>
                    <div className='flex gap-3 items-end text-lg'>
                        <CircleCheckBig size={30} strokeWidth={2.5} className=' font-bold' />
                        <span className='font-semibold '>Healthier</span>
                    </div>
                    <div className='flex gap-3 items-end text-lg'>
                        <CircleCheckBig size={30} strokeWidth={2.5} className=' font-bold' />
                        <span className='font-semibold '>Happier birth experiences</span>
                    </div>
                </div>
                <div className='flex gap-10 pt-10'>
                    <Button as={Link} color="primary" size='lg' href="#" variant='solid' className="rounded-md w-40">Book Now</Button>
                    <Button as={Link} color='primary' size='lg' href="#" variant='bordered' className="rounded-md w-40">Get In Touch</Button>
                </div>
            </div>
            <div className='h-[70vh]'>
                <Image src={images.hero} width={500} alt='hero' />
            </div>
        </div>
    )
}

export default HeroSection
