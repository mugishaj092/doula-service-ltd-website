'use client'
import { images } from '@/utils/constant/images'
import { Button } from '@nextui-org/react'
import { CircleCheckBig } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const HeroSection = () => {
        const router = useRouter();
    
        const handleButtonClick = (link:string) => {
            router.push(link);
        };
    return (
        <div className='w-full flex justify-between max-md:flex-col'>
            <div className='w-1/2 max-md:w-full flex flex-col justify-center gap-4 h-[70vh] max-md:h-[50vh] '>
                <h1 className='text-5xl max-md:text-3xl font-semibold text-primary'>Empowering Mothers, Transforming Lives</h1>
                <p className='text-lg max-md:text-sm text-dark'>At NYINAWUMUNTU DOULA SERVICES Ltd, we are dedicated to improving maternal and neonatal health outcomes in Rwanda. Our services provide personalized, non-medical support to mothers throughout pregnancy, childbirth, and the postpartum period. Through our doula services, we aim to reduce maternal and neonatal mortality rates and improve the overall birth experience for every woman.</p>
                <div className='flex justify-between gap-2 flex-wrap'>
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
                    <Button type='submit' color="primary" size='lg' onClick={()=>handleButtonClick('/book-now')} variant='solid' className="rounded-md w-40">Book Now</Button>
                    <Button type='submit' color='primary' size='lg' onClick={()=>handleButtonClick('/contact')} variant='bordered' className="rounded-md w-40">Get In Touch</Button>                </div>
            </div>
            <div className='h-[70vh] max-md:w-full max-md:h-fit'>
                <Image src={images.hero} width={500} alt='hero' />
            </div>
        </div>
    )
}

export default HeroSection
