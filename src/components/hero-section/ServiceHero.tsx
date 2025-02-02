'use client'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import HeroCard from './HeroCard'
const heroCardsData = [
    {
        headerTitle: "Prenatal Care",
        imageSrc: "/prenatal.png",
    },
    {
        headerTitle: "Labor and Birth Support",
        imageSrc: "/prenatal.png",
    },
    {
        headerTitle: "Postpartum Care",
        imageSrc: "/prenatal.png",
    },
]


const ServiceHero = () => {
    return (
        <div className='w-full mt-20 flex flex-col gap-16'>
            <div className='flex max-md:flex-col'>
                <div className='flex flex-col w-1/2'>
                    <span className='text-md'>
                        Our service
                    </span>
                    <h1 className='text-xl font-semibold text-primary'>Services We Offer</h1>
                </div>
                <div className='flex w-1/2 max-md:w-full'>
                    <p className='w-[80%] text-sm text-gray-600'>NYINAWUMUNTU DOULA SERVICES Ltd provides comprehensive support throughout pregnancy, labor, and postpartum, ensuring the well-being of both mother and baby.</p>
                    <Button as={Link} color="primary" size='md' href="/service" variant='solid' className="rounded-md w-35">Discover More</Button>
                </div>
            </div>
            <div className='flex gap-4 max-md:flex-col'>
                {heroCardsData.map((data, index) => (
                    <HeroCard
                        key={index}
                        headerTitle={data.headerTitle}
                        imageSrc={data.imageSrc}
                    />
                ))}
            </div>
        </div>
    )
}

export default ServiceHero
