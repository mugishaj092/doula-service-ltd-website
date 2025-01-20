import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react'
import React, { useState } from 'react'

const HeroCard = ({ headerTitle, headerSubtitle, imageSrc, footerTitle, footerSubtitle }: { headerTitle:string, headerSubtitle:string, imageSrc:string, footerTitle:string, footerSubtitle:string } ) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-7 relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <CardHeader
                className={`absolute bg-black/40 z-10 top-1 flex-col items-start transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <p className="text-tiny text-white/60 uppercase font-bold">{headerSubtitle}</p>
                <h4 className="text-white/90 font-medium text-xl">{headerTitle}</h4>
            </CardHeader>
            <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src={imageSrc}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                    <div className="flex flex-col">
                        <p className="text-tiny text-white/60">{footerTitle}</p>
                        <p className="text-tiny text-white/60">{footerSubtitle}</p>
                    </div>
                </div>
                <Button color="primary" radius="md" size="sm">
                    Book now
                </Button>
            </CardFooter>
        </Card>
    )
}

export default HeroCard
