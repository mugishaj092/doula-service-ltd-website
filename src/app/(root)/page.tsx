import HeroSection from '@/components/hero-section/Hero'
import ServiceHero from '@/components/hero-section/ServiceHero'
import HowItsworks from '@/components/howItsWorks/HowItsworks'
import React from 'react'

const page = () => {
    return (
        <div>
            <HeroSection />
            <ServiceHero />
            <HowItsworks />
        </div>
    )
}

export default page