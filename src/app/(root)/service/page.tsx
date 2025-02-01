'use client'
import { images } from '@/utils/constant/images'
import { Button, Card, CardBody, CardFooter } from '@nextui-org/react'
import { SquareDashedMousePointer } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
          const router = useRouter();
      
          const handleButtonClick = (link:string) => {
              router.push(link);
              console.log('button clicked');
              
          };
  return (
    <div className='flex flex-col gap-8'>
      <div>
        <div className='flex flex-col'>
          <span className='text-primary'>Our service</span>
          <span className='text-4xl font-semibold'>Services</span>
        </div>
        <p className='text-[#64748B]'>Comprehensive Support for Every Step of the Journey At NYINAWUMUNTU DOULA SERVICES Ltd, our doulas offer a wide range of support during the prenatal, labor, and postpartum periods. This holistic care aims to enhance the health and well-being of both mother and baby. Prenatal Care</p>
      </div>
      <div className='flex gap-4 max-md:flex-col'>
        <div className='flex flex-col gap-4 w-[65%] max-md:w-full'>
          <Card className="w-full p-0 bg-[#f0dee4a1] rounded-xl">
            <CardBody className="flex flex-col md:flex-row gap-4 items-center md:items-start">
              <div className="flex justify-center items-center p-2 max-md:w-full rounded-lg bg-primary w-40 h-full">
                <Image
                  src={images.prenatal}
                  alt="services"
                  className="object-contain max-md:w-44"
                />
              </div>
              <div className="flex flex-col justify-between w-full md:w-[60%]">
                <div className="flex flex-col gap-4">
                  <span className="text-2xl font-semibold">Prenatal Care</span>
                  <div className="flex flex-col gap-3 text-[#64748B] text-sm">
                    {["One-on-one consultations to prepare for labor and birth.",
                      "Information and resources on birthing options, pain relief, and newborn care.",
                      "Emotional support to reduce anxiety and stress."].map((text, index) => (
                        <div key={index} className="flex gap-2 items-start">
                          <SquareDashedMousePointer width={20} />
                          <span>{text}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <Button color="primary" size="md" onPress={() => handleButtonClick("/book-now")} className="w-full rounded-md">
                Book Now
              </Button>
            </CardFooter>
          </Card>
          <Card className="w-full p-0 bg-[#f0dee4a1] rounded-xl">
            <CardBody className="flex flex-col md:flex-row gap-4 items-center md:items-start">
              <div className="flex justify-center items-center p-2 max-md:w-full rounded-lg bg-primary w-40 h-full max-md:h-40">
                <Image
                  src={images.prenatal}
                  alt="services"
                  className="object-contain max-md:w-44"
                />
              </div>
              <div className="flex flex-col justify-between w-full md:w-[60%]">
                <div className="flex flex-col gap-4">
                  <span className="text-2xl font-semibold">Postpartum Care</span>
                  <div className="flex flex-col gap-3 text-[#64748B] text-sm">
                    {["Support and guidance during the recovery process.",
                      "Assistance with breastfeeding and newborn care.",
                      "Emotional support for the mother as she adjusts to life after childbirth."].map((text, index) => (
                        <div key={index} className="flex gap-2 items-start">
                          <SquareDashedMousePointer width={20} />
                          <span>{text}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <Button color="primary" size="md" onPress={() => handleButtonClick("/book-now")} className="w-full rounded-md">
                Book Now
              </Button>
            </CardFooter>
          </Card>
        </div>
        <Card className="w-[35%] max-md:w-full max-w-2xl p-0 bg-[#f0dee4a1] rounded-xl">
          <CardBody className="flex flex-col gap-4 items-center md:items-start">
            <div className="flex justify-center items-center p-2 w-full rounded-lg bg-primary h-40">
              <Image
                src={images.prenatal}
                alt="services"
                className="object-contain w-44"
              />
            </div>
            <div className="flex flex-col justify-between w-full">
              <div className="flex flex-col gap-4">
                <span className="text-2xl font-semibold">Labor and Birth Support</span>
                <div className="flex flex-col gap-3 text-[#64748B] text-sm">
                  {["Continuous emotional and physical support during labor.",
                    "Assistance with relaxation techniques, breathing exercises, and pain management strategies.",
                    "Advocacy to ensure that your birth plan is respected and that you feel heard and supported."].map((text, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        <SquareDashedMousePointer width={20} height={40} />
                        <span className='w-11/12'>{text}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </CardBody>
          <CardFooter>
            <Button color="primary" size="md" onPress={() => handleButtonClick("/book-now")} className="w-full rounded-md">
              Book Now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default page
