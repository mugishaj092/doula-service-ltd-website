'use client';
import React from "react";
import { Button } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import { FaHeartbeat, FaUsers, FaCertificate } from "react-icons/fa";
import { images } from "@/utils/constant/images";
import Image from "next/image";
import Link from "next/link";

const BecomeDoula = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <section className="text-center py-20 max-sm:py-4 max-sm:mt-2 bg-primary text-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold">Join the Movement: Train to Become a Doula</h1>
                <p className="mt-4 text-lg max-w-2xl mx-auto">
                    Empower women, support families, and make a difference in maternal health in Rwanda.
                </p>
                <Link href="https://forms.gle/CVDesSYXiXJCGp9g6" passHref>
                    <Button className="mt-6 bg-white text-primary px-6 py-3 rounded-lg font-semibold">
                        Register for Training
                    </Button>
                </Link>
            </section>
            <section className="container mx-auto px-6 py-16 max-sm:py-8 grid md:grid-cols-2 gap-10 rounded-b-lg">
                <div>
                    <h2 className="text-3xl font-bold">Doula Training Program</h2>
                    <p className="mt-4 text-gray-700">
                        Our doula training program prepares you to offer professional, compassionate support during pregnancy, labor, and postpartum. You will gain a deep understanding of the birthing process, as well as practical skills to support women during this transformative time.
                    </p>
                </div>
                <Image
                    src={images.becomeDoula}
                    alt="Doula training session"
                    className="rounded-xl shadow-lg"
                />
            </section>
            <section className="bg-white py-16 px-6 max-sm:px-0">
                <h2 className="text-3xl font-bold text-center">Why Train to Be a Doula?</h2>
                <div className="grid md:grid-cols-3 gap-8 max-sm:gap-4 mt-8 max-sm:mt-4 container mx-auto">
                    <Card className="text-center p-6">
                        <CardBody>
                            <FaHeartbeat className="text-primary text-5xl mx-auto" />
                            <h3 className="text-xl font-semibold mt-4">Empower Women</h3>
                            <p className="text-gray-700">Provide knowledge and support during childbirth.</p>
                        </CardBody>
                    </Card>
                    <Card className="text-center p-6">
                        <CardBody>
                            <FaUsers className="text-primary text-5xl mx-auto" />
                            <h3 className="text-xl font-semibold mt-4">Join a Community</h3>
                            <p className="text-gray-700">Become part of a growing movement.</p>
                        </CardBody>
                    </Card>
                    <Card className="text-center p-6">
                        <CardBody>
                            <FaCertificate className="text-primary text-5xl mx-auto" />
                            <h3 className="text-xl font-semibold mt-4">Make an Impact</h3>
                            <p className="text-gray-700">Help reduce maternal and neonatal mortality.</p>
                        </CardBody>
                    </Card>
                </div>
            </section>
            <section className="container mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-center">What’s Included in Training?</h2>
                <ul className="mt-6 text-lg text-gray-700 list-disc pl-6 max-w-2xl mx-auto">
                    <li>Comprehensive education on pregnancy, birth, and postpartum care.</li>
                    <li>Hands-on practice with experienced professionals.</li>
                    <li>Certification and ongoing support for your professional development.</li>
                </ul>
            </section>
            <section className="text-center py-16 max-sm:py-8 max-sm:mb-4 bg-primary text-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold">Take the First Step in Becoming a Doula</h2>
                <Link href="https://forms.gle/CVDesSYXiXJCGp9g6" passHref>
                    <Button className="mt-6 bg-white text-primary px-6 py-3 rounded-lg font-semibold">
                        Register Now
                    </Button>
                </Link>
            </section>
        </div>
    );
};

export default BecomeDoula;
