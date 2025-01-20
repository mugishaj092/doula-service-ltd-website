'use client'
import { images } from '@/utils/constant/images'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const Services = () => {
    const router = useRouter();

    const handleButtonClick = () => {
        router.push('/book-now');
    };
    return (
        <div className='flex flex-col gap-10 text-gray-600 leading-relaxed pb-4'>
            <div className='flex gap-4 max-md:flex-col'>
                <div className='w-1/2 max-md:w-full'>
                    <Image className='w-full' src={images.prenatal} alt='services' />
                </div>
                <div className='text-sm'>
                    <div>
                        <h1 className='text-2xl font-semibold'>Prenatal</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi aliquid aperiam voluptas, soluta delectus eaque illo enim saepe commodi asperiores vitae id aliquam dolor in voluptatem magnam atque officiis.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi aliquid aperiam voluptas, soluta delectus eaque illo enim saepe commodi asperiores vitae id aliquam dolor in voluptatem magnam atque officiis.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi aliquid aperiam voluptas, soluta delectus eaque illo enim saepe commodi asperiores vitae id aliquam dolor in voluptatem magnam atque officiis.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi aliquid aperiam voluptas, soluta delectus eaque illo enim saepe commodi asperiores vitae id aliquam dolor in voluptatem magnam atque officiis.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi aliquid aperiam voluptas, soluta delectus eaque illo enim saepe commodi asperiores vitae id aliquam dolor in voluptatem magnam atque officiis.
                        </p>
                    </div>
                    <Button type='submit' color='primary' onClick={handleButtonClick} className='mt-4 rounded-md'>Book Now</Button>
                </div>
            </div>
            <div className='flex gap-4 flex-row-reverse max-md:flex-col'>
                <div className='w-1/2'>
                    <Image className='w-full' src={images.prenatal} alt='services' />
                </div>
                <div className='text-sm'>
                    <div>
                        <h1 className='text-2xl font-semibold'>Prenatal</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi aliquid aperiam voluptas, soluta delectus eaque illo enim saepe commodi asperiores vitae id aliquam dolor in voluptatem magnam atque officiis.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi aliquid aperiam voluptas, soluta delectus eaque illo enim saepe commodi asperiores vitae id aliquam dolor in voluptatem magnam atque officiis.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi aliquid aperiam voluptas, soluta delectus eaque illo enim saepe commodi asperiores vitae id aliquam dolor in voluptatem magnam atque officiis.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi aliquid aperiam voluptas, soluta delectus eaque illo enim saepe commodi asperiores vitae id aliquam dolor in voluptatem magnam atque officiis.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi aliquid aperiam voluptas, soluta delectus eaque illo enim saepe commodi asperiores vitae id aliquam dolor in voluptatem magnam atque officiis.
                        </p>
                    </div>
                    <Button type='submit' color='primary' className='mt-4 rounded-md' onClick={handleButtonClick}>Book Now</Button>
                </div>
            </div>
            <div className='flex gap-4 max-md:flex-col'>
                <div className='w-1/2'>
                    <Image className='w-full' src={images.prenatal} alt='services' />
                </div>
                <div className='text-sm'>
                    <div>
                        <h1 className='text-2xl font-semibold'>Prenatal</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi aliquid aperiam voluptas, soluta delectus eaque illo enim saepe commodi asperiores vitae id aliquam dolor in voluptatem magnam atque officiis.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi aliquid aperiam voluptas, soluta delectus eaque illo enim saepe commodi asperiores vitae id aliquam dolor in voluptatem magnam atque officiis.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi aliquid aperiam voluptas, soluta delectus eaque illo enim saepe commodi asperiores vitae id aliquam dolor in voluptatem magnam atque officiis.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi aliquid aperiam voluptas, soluta delectus eaque illo enim saepe commodi asperiores vitae id aliquam dolor in voluptatem magnam atque officiis.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi aliquid aperiam voluptas, soluta delectus eaque illo enim saepe commodi asperiores vitae id aliquam dolor in voluptatem magnam atque officiis.
                        </p>
                    </div>
                    <Button type='submit' color='primary' className='mt-4 rounded-md' onClick={handleButtonClick}>Book Now</Button>
                </div>
            </div>
        </div>
    )
}

export default Services
