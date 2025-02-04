import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const HeroCard = ({ headerTitle, imageSrc, }: { headerTitle: string, imageSrc: string }) => {
    const router = useRouter();
    const handleButtonClick = (link: string) => {
        router.push(link);
        console.log('button clicked');
    };
    return (
        <Card className="w-[35%] max-md:w-full max-w-2xl p-0 bg-[#f0dee4a1] rounded-xl">
            <CardBody className="flex flex-col gap-2 items-center md:items-start">
                <div className="flex justify-center items-center p-2 w-full rounded-lg bg-[#d7c2c9] h-40">
                    <Image
                        src={imageSrc}
                        alt="services"
                        className="object-contain w-44"
                    />
                </div>
                <div className="flex flex-col justify-between w-full">
                    <div className="flex flex-col gap-2">
                        <span className="text-lg font-medium text-[#64748B]">{headerTitle}</span>
                    </div>
                </div>
            </CardBody>
            <CardFooter>
                <Button color="primary" size="md" onPress={() => handleButtonClick("/book-now")} className="w-full rounded-md">
                    Book Now
                </Button>
            </CardFooter>
        </Card>
    )
}

export default HeroCard
