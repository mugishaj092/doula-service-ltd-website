"use client"
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';

interface FormData {
    full_names: string;
    email: string;
    telephone: string;
    message: string;
}
const Contacts: React.FC = () => {
    const [formData, setFormData] = useState({
        full_names: '',
        email: '',
        telephone: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const validateEmail = (email: string): boolean => {
        // Simple email validation pattern
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

    };
    return (
        <section
            className="lg:px-20 relative z-10 overflow-hidden bg-white py-20 lg:py-[50px]"
        >
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap lg:justify-between">
                    <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                        <div className="mb-12 max-w-[570px] lg:mb-0 max-md:mx-4">
                            <span className="mb-2 block text-md font-semibold text-primary">
                                Contact Us
                            </span>
                            <h2
                                className="mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px] text-gray-600"
                            >
                                GET IN TOUCH WITH US
                            </h2>
                            <p
                                className="mb-9 text-sm leading-relaxed text-body-color text-gray-600"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquid sint sequi facilis eius dolore dignissimos, minima deleniti asperiores excepturi? Nesciunt porro architecto debitis excepturi maxime aliquid libero hic saepe?
                            </p>
                            <div className="mb-8 flex w-full max-w-[370px]">
                                <div className="w-full">
                                    <h4 className="mb-1 text-xl font-bold text-gray-600">
                                        Our Location
                                    </h4>
                                    <p className="text-base text-body-color dark:text-dark-6">
                                        Kigali - Rwanda
                                    </p>
                                </div>
                            </div>
                            <div className="mb-8 flex w-full max-w-[370px]">
                                <div className="w-full">
                                    <h4 className="mb-1 text-xl font-bold text-gray-600">
                                        Phone Number
                                    </h4>
                                    <p className="text-base text-body-color dark:text-dark-6">
                                        (+250) 792418795
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8 flex w-full max-w-[370px]">
                                <div className="w-full">
                                    <h4 className="mb-1 text-xl font-bold text-gray-600">
                                        Email Address
                                    </h4>
                                    <p className="text-base text-body-color dark:text-dark-6">
                                        doula@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                        {responseMessage && (
                            <div className="mb-4">
                                {/* <Alert
                                    message={responseMessage}
                                    type="success"
                                    showIcon
                                    closable
                                /> */}
                            </div>
                        )}
                        <div
                            className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12-2"
                        >

                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        name="full_names"
                                        placeholder="Your Name"
                                        value={formData.full_names}
                                        onChange={handleInputChange}
                                        className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:text-dark-6"
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:text-dark-6"
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        name="telephone"
                                        placeholder="Your Phone"
                                        value={formData.telephone}
                                        onChange={handleInputChange}
                                        className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:text-dark-6"
                                    />
                                </div>
                                <div className="mb-6">
                                    <textarea
                                        rows={6}
                                        name="message"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:text-dark-6"
                                    ></textarea>
                                </div>
                                <div>
                                    <Button
                                        type="submit" // Ensure the button submits the form
                                        className="w-full"
                                        color='primary'
                                    >
                                        {!loading && "Submit"} {/* Change 'name' to "Submit" or any other text you want */}
                                        {loading && (
                                            <div className="border-t-4 border-b-4 border-white rounded-full w-6 h-6 animate-spin m-auto"></div>
                                        )}
                                    </Button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;