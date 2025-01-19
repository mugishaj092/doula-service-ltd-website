'use client';
import { Input, Textarea, Button, Select, SelectItem, Alert } from '@nextui-org/react';
import React, { useState } from 'react';

const Book = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        serviceType: '',
        preferredDate: '',
        preferredTime: '',
        additionalDetails: '',
        country: '',
    });

    const [loading, setLoading] = useState(false); // Loading state
    const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null); // Alert state

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setAlert(null); // Clear any existing alert

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setAlert({ type: 'success', message: 'Booking submitted successfully!' });
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    serviceType: '',
                    preferredDate: '',
                    preferredTime: '',
                    additionalDetails: '',
                    country: '',
                });
            } else {
                const errorData = await response.json();
                console.error('Error response:', errorData);
                setAlert({ type: 'error', message: 'Failed to send the booking. Please try again.' });
            }
        } catch (error) {
            console.error('Error submitting booking:', error);
            setAlert({ type: 'error', message: 'An error occurred while submitting your booking.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6">
            {alert && (
                <div className="w-full flex items-center my-3">
                    <Alert color={alert.type === 'error' ? 'danger' : alert.type} title={alert.message} description="Please review your information and try again." />
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-4">
                    <Input
                        label="First Name"
                        name="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        onChange={handleChange}
                        value={formData.firstName}
                        required
                    />
                    <Input
                        label="Last Name"
                        name="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        onChange={handleChange}
                        value={formData.lastName}
                        required
                    />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-4">
                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                        value={formData.email}
                        required
                    />
                    <Input
                        label="Phone Number"
                        name="phoneNumber"
                        type="tel"
                        placeholder="Enter your phone number"
                        onChange={handleChange}
                        value={formData.phoneNumber}
                        required
                    />
                </div>
                <div className="w-full mb-4">
                    <Select
                        isRequired
                        label="Service Type"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        placeholder="Select a service"
                    >
                        <SelectItem key="postnatal" value="Postnatal care">
                            Postnatal care
                        </SelectItem>
                        <SelectItem key="prenatal" value="Prenatal support">
                            Prenatal support
                        </SelectItem>
                        <SelectItem key="childcare" value="Childcare support">
                            Childcare support
                        </SelectItem>
                    </Select>
                </div>
                <div className="w-full mb-4">
                    <Input
                        label="Preferred Date"
                        name="preferredDate"
                        type="date"
                        onChange={handleChange}
                        value={formData.preferredDate}
                        required
                    />
                </div>
                <div className="w-full mb-4">
                    <Input
                        label="Preferred Time"
                        name="preferredTime"
                        type="time"
                        onChange={handleChange}
                        value={formData.preferredTime}
                        required
                    />
                </div>
                <div className="w-full mb-4">
                    <Textarea
                        label="Additional Details"
                        name="additionalDetails"
                        placeholder="Enter any additional information or special requests"
                        onChange={handleChange}
                        value={formData.additionalDetails}
                    />
                </div>
                <Button
                    type="submit"
                    color="primary"
                    className="w-full"
                    isLoading={loading}
                >
                    {loading ? 'Submitting...' : 'Submit Booking'}
                </Button>
            </form>
        </div>
    );
};

export default Book;
