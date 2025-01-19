import { icons } from '@/utils/constant/icons'
import { images } from '@/utils/constant/images'
import Image from 'next/image'
import React from 'react'

const HowItsworks = () => {
    return (
        <div className='w-full flex gap-8 justify-between flex-wrap pt-20 max-md:flex-col'>
            <div className='w-[31%] max-md:w-full'>
                <span className='text-primary'>Why You Choose Us?</span>
                <h1 className='text-2xl font-semibold'>Committed To People's Life</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div className='bg-primary rounded-lg p-4 py-8 text-white w-[31%] max-md:w-full'>
                <Image src={icons.idea} width={54} height={54} alt='image' />
                <div className='pt-4'>
                    <span className='font-semibold text-lg'>User Friendly</span>
                    <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida </p>
                </div>
            </div>
            <div className='bg-primary rounded-lg p-4 py-8 text-white w-[31%] max-md:w-full'>
                <Image src={icons.idea} width={54} height={54} alt='image' />
                <div className='pt-4'>
                    <span className='font-semibold text-lg'>User Friendly</span>
                    <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida </p>
                </div>
            </div>
            <div className='bg-primary rounded-lg p-4 py-8 text-white w-[31%] max-md:w-full'>
                <Image src={icons.idea} width={54} height={54} alt='image' />
                <div className='pt-4'>
                    <span className='font-semibold text-lg'>User Friendly</span>
                    <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida </p>
                </div>
            </div>
            <div className='bg-primary rounded-lg p-4 py-8 text-white w-[31%] max-md:w-full'>
                <Image src={icons.idea} width={54} height={54} alt='image' />
                <div className='pt-4'>
                    <span className='font-semibold text-lg'>User Friendly</span>
                    <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida </p>
                </div>
            </div>
            <div className='bg-primary rounded-lg p-4 py-8 text-white w-[31%] max-md:w-full'>
                <Image src={icons.idea} width={54} height={54} alt='image' />
                <div className='pt-4'>
                    <span className='font-semibold text-lg'>User Friendly</span>
                    <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida </p>
                </div>
            </div>
        </div>
    )
}

export default HowItsworks
