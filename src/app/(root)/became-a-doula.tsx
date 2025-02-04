import React from "react";
import { Button } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import { FaHeartbeat, FaUsers, FaCertificate } from "react-icons/fa";

const BecomeDoula = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Hero Section */}
            <section className="text-center py-20 bg-teal-600 text-white">
                <h1 className="text-4xl font-bold">Join the Movement: Train to Become a Doula</h1>
                <p className="mt-4 text-lg max-w-2xl mx-auto">
                    Empower women, support families, and make a difference in maternal health in Rwanda.
                </p>
                <Button className="mt-6 bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold">
                    Register for Training
                </Button>
            </section>

            {/* About the Training */}
            <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
                <div>
                    <h2 className="text-3xl font-bold">Doula Training Program</h2>
                    <p className="mt-4 text-gray-700">
                        Our doula training program prepares you to offer professional, compassionate support during pregnancy, labor, and postpartum. You will gain a deep understanding of the birthing process, as well as practical skills to support women during this transformative time.
                    </p>
                </div>
                <img
                    src="/doula-training.jpg"
                    alt="Doula training session"
                    className="rounded-xl shadow-lg"
                />
            </section>

            {/* Why Train to Be a Doula */}
            <section className="bg-white py-16 px-6">
                <h2 className="text-3xl font-bold text-center">Why Train to Be a Doula?</h2>
                <div className="grid md:grid-cols-3 gap-8 mt-8 container mx-auto">
                    <Card className="text-center p-6">
                        <CardBody>
                            <FaHeartbeat className="text-teal-600 text-5xl mx-auto" />
                            <h3 className="text-xl font-semibold mt-4">Empower Women</h3>
                            <p className="text-gray-700">Provide knowledge and support during childbirth.</p>
                        </CardBody>
                    </Card>
                    <Card className="text-center p-6">
                        <CardBody>
                            <FaUsers className="text-teal-600 text-5xl mx-auto" />
                            <h3 className="text-xl font-semibold mt-4">Join a Community</h3>
                            <p className="text-gray-700">Become part of a growing movement.</p>
                        </CardBody>
                    </Card>
                    <Card className="text-center p-6">
                        <CardBody>
                            <FaCertificate className="text-teal-600 text-5xl mx-auto" />
                            <h3 className="text-xl font-semibold mt-4">Make an Impact</h3>
                            <p className="text-gray-700">Help reduce maternal and neonatal mortality.</p>
                        </CardBody>
                    </Card>
                </div>
            </section>

            {/* Training Details */}
            <section className="container mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-center">What’s Included in Training?</h2>
                <ul className="mt-6 text-lg text-gray-700 list-disc pl-6 max-w-2xl mx-auto">
                    <li>Comprehensive education on pregnancy, birth, and postpartum care.</li>
                    <li>Hands-on practice with experienced professionals.</li>
                    <li>Certification and ongoing support for your professional development.</li>
                </ul>
            </section>

            {/* CTA Section */}
            <section className="text-center py-16 bg-teal-600 text-white">
                <h2 className="text-3xl font-bold">Take the First Step in Becoming a Doula</h2>
                <Button className="mt-6 bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold">
                    Register Now
                </Button>
            </section>

            {/* Footer */}
            <footer className="text-center py-6 bg-gray-900 text-white">
                <p>NYINAWUMUNTU DOULA SERVICES Ltd | Contact: info@doula-services.com</p>
            </footer>
        </div>
    );
};

export default BecomeDoula;
