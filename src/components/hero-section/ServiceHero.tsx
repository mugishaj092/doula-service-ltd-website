'use client'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import HeroCard from './HeroCard'
const heroCardsData = [
    {
        headerTitle: "Strong Beginnings, Bright Futures.",
        headerSubtitle: "Nurturing You, Caring for Baby.",
        imageSrc: "/prenatal.png",
        footerTitle: "Prenatal support",
        footerSubtitle: "Healthy Moms, Happy Babies.",
    },
    {
        headerTitle: "Care for You, Care for Baby.",
        headerSubtitle: "Empowering Women Everywhere.",
        imageSrc: "/postnatal.png",
        footerTitle: "Postnatal care",
        footerSubtitle: "Support for Every Stage.",
    },
    {
        headerTitle: "Building Bright Futures.",
        headerSubtitle: "Healthy Steps Forward.",
        imageSrc: "/childcare.png",
        footerTitle: "Childcare support",
        footerSubtitle: "Helping Kids Thrive.",
    },
]


const ServiceHero = () => {
    return (
        <div className='w-full mt-20 flex flex-col gap-16'>
            <div className='flex'>
                <div className='flex flex-col w-1/2'>
                    <span className='text-md'>
                        Our service
                    </span>
                    <h1 className='text-xl font-semibold text-primary'>Services We Offer</h1>
                </div>
                <div className='flex w-1/2'>
                    <p className='w-[80%] text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsum available, but the majority simply free text now have suffered alteration.</p>
                    <Button as={Link} color="primary" size='md' href="#" variant='solid' className="rounded-md w-35">Discover More</Button>
                </div>
            </div>
            <div className='flex gap-4'>
                {heroCardsData.map((data, index) => (
                    <HeroCard
                        key={index}
                        headerTitle={data.headerTitle}
                        headerSubtitle={data.headerSubtitle}
                        imageSrc={data.imageSrc}
                        footerTitle={data.footerTitle}
                        footerSubtitle={data.footerSubtitle}
                    />
                ))}
            </div>
        </div>
    )
}

export default ServiceHero
