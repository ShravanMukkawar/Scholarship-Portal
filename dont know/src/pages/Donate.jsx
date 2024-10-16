"use client";

import { useState } from "react";

export default function Donate() {
    const [amount, setAmount] = useState(0);
    const [showForm, setShowForm] = useState(false); 
    const [showForm2, setShowForm2] = useState(false); 

    const handleButtonClick = (value) => {
        setAmount(value);
    };

    const handleInputChange = (event) => {
        setAmount(event.target.value);
    };

    const handleDonateClick = () => {
        setShowForm(true);
    };

    const handleFormSubmit = () => {
        setShowForm(false);
        setShowForm2(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setShowForm2(false);
    };

    return (
        <>
            <div>
                <div className="relative min-h-screen">
                    <div
                        style={{
                            backgroundImage: `url('/NGO.jpg')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            opacity: 0.2,
                        }}
                        className="absolute inset-0 z-0"
                    />
                    <p className="relative text-white text-3xl text-center p-6">Give. Empower. Transform.</p>
                    <div className="flex justify-center gap-[150px] flex-wrap z-10 mt-20">
                        <div className="w-[500px] h-[600px] bg-gray-200 text-gray-200 text-center rounded-lg z-10 p-10">
                            <img src="/donatepic.webp" className="h-[300px] opacity-90" alt="Donate" />
                            <p className="mt-5 text-gray-800 text-xl font-medium">You can make a Difference Right Now</p>
                            <p className="text-gray-600">
                                "Every small act of kindness has the power to create a ripple of change. By donating, you are not just giving money;
                                you are offering hope, support, and a chance for a better tomorrow to those in need."
                            </p>
                        </div>
                        <div className="w-[450px] h-[600px] bg-gray-200 text-gray-500 text-2xl text-center rounded-lg z-10 p-4 mb-20">
                            <p>Secure donation</p>
                            <div className="flex justify-center gap-2">
                                <button className="mt-10 bg-blue-700 w-[200px] text-lg text-white py-2 px-3 rounded-lg hover:bg-blue-800">Give Once</button>
                                <button className="mt-10 bg-gray-700 w-[200px] text-lg text-white py-2 px-3 rounded-lg hover:bg-gray-800">Monthly</button>
                            </div>

                            <div className="flex justify-center flex-wrap gap-8 text-gray-800">
                                <button onClick={() => handleButtonClick(100)} className="mt-10 bg-white w-[100px] text-lg py-2 px-3 rounded-lg hover:bg-gray-100 border border-gray-500">
                                    100$
                                </button>
                                <button onClick={() => handleButtonClick(200)} className="mt-10 bg-white w-[100px] text-lg py-2 px-3 rounded-lg hover:bg-gray-100 border border-gray-500">
                                    200$
                                </button>
                                <button onClick={() => handleButtonClick(300)} className="mt-10 bg-white w-[100px] text-lg py-2 px-3 rounded-lg hover:bg-gray-100 border border-gray-500">
                                    300$
                                </button>
                            </div>
                            <div className="flex justify-center flex-wrap gap-8 text-gray-800">
                                <button onClick={() => handleButtonClick(500)} className="mt-5 bg-white w-[100px] text-lg py-2 px-3 rounded-lg hover:bg-gray-100 border border-gray-500">
                                    500$
                                </button>
                                <button onClick={() => handleButtonClick(140)} className="mt-5 bg-white w-[100px] text-lg py-2 px-3 rounded-lg hover:bg-gray-100 border border-gray-500">
                                    140$
                                </button>
                                <button onClick={() => handleButtonClick(700)} className="mt-5 bg-white w-[100px] text-lg py-2 px-3 rounded-lg hover:bg-gray-100 border border-gray-500">
                                    700$
                                </button>
                            </div>

                            <input
                                className="mt-10 bg-white w-4/5 text-lg py-2 px-3 rounded-lg hover:bg-gray-100 border-2 border-blue-500"
                                placeholder="Other Amount"
                                value={amount}
                                onChange={handleInputChange}
                            />

                            <p className="text-lg mt-5">Designate to children who need help</p>
                            <button onClick={handleDonateClick} className="mt-20 bg-green-500 w-4/5 text-lg text-white font-medium py-2 px-3 rounded-lg hover:bg-green-600 border-2">
                                DONATE
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {showForm && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="relative bg-white w-[900px] h-[500px] p-10 rounded-lg shadow-lg flex">
                        <div className="w-1/2 p-6 bg-blue-100 rounded-l-lg flex flex-col justify-center items-center">
                            <img src="/campaign.jpg" alt="Campaign Image" className="h-32 mb-4" />
                            <img src="/ngologo.png" alt="NGO Logo" className="h-auto w-24 mb-4" /> 
                            <h2 className="text-xl font-bold text-gray-700">You Will Make a Difference</h2>
                            <p className="text-gray-600 text-center mt-2">
                                Make the world better, kinder, brighter. Every dollar you give will create real change. Donate to educate under-privileged children in India.
                            </p>
                        </div>

                        <div className="w-1/2 p-6">
                            <button onClick={handleCloseForm} className="absolute top-4 right-4 text-gray-700 text-2xl">✖</button>
                            <h2 className="text-xl font-semibold mb-4">Enter Your Details</h2>
                            <input className="border w-full mb-4 p-2" placeholder="First Name" />
                            <input className="border w-full mb-4 p-2" placeholder="Last Name" />
                            <input className="border w-full mb-4 p-2" placeholder="Email" />
                            <input className="border w-full mb-4 p-2" placeholder="Phone Number" />
                            <button onClick={handleFormSubmit} className="w-full bg-green-500 text-white py-2 rounded-lg">Submit</button>
                        </div>
                    </div>
                </div>
            )}

            {showForm2 && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="relative bg-white w-[900px] h-[500px] p-10 rounded-lg shadow-lg flex">
                        <div className="w-1/2 p-6 bg-blue-100 rounded-l-lg flex flex-col justify-center items-center">
                            <img src="/campaign.jpg" alt="Campaign Image" className="h-32 mb-4" />
                            <img src="/ngologo.png" alt="NGO Logo" className="h-auto w-24 mb-4" /> 
                            <h2 className="text-xl font-bold text-gray-700">You Will Make a Difference</h2>
                            <p className="text-gray-600 text-center mt-2">
                                Make the world better, kinder, brighter. Every dollar you give will create real change. Donate to educate under-privileged children in India.
                            </p>
                        </div>

                        <div className="w-1/2 p-6">
                            <button onClick={handleCloseForm} className="absolute top-4 right-4 text-gray-700 text-2xl">✖</button>
                            <h2 className="text-xl font-semibold mb-4">Confirm Your Donation</h2>
                            <p className="text-lg mb-4">You have chosen to donate ${amount}.</p>
                            <div className="flex gap-4">
                                <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Pay with Razorpay</button>
                                <button className="w-full bg-gray-500 text-white py-2 rounded-lg">Debit/Credit Card</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
