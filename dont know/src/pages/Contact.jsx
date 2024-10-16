"use client";
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import msg from '../../public/message.webp';

export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = {
            name,
            email,
            message,
        };
    
        try {
            const response = await fetch('http://localhost:5000/contact/smessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            // Check if the response is successful
            if (response.ok) {
                const data = await response.json();
                console.log('Success:', data.message);
                alert('Message sent successfully');
    
                // Clear the form fields
                setName('');
                setEmail('');
                setMessage('');
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData.message);
                alert('Failed to send message, please try again later');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the message, please try again later');
        }
    };
    

    return (
        <div>
            <main className="bg-gray-50 min-h-screen">
                <div className="container mx-auto py-12 ">
                    <h1 className="text-4xl font-semibold text-gray-800 text-center mb-8">
                        Contact Us
                    </h1>

                    <div className="flex flex-wrap justify-center gap-6 m-[10px]">
                        <div className="w-[400px] p-4 bg-blue-100 transition hover:shadow-lg text-center border border-blue-900 text-black ">
                            <FaEnvelope className="mx-auto mb-2 text-xl" />
                            <h3>Email</h3>
                            <hr className="w-12 mt-2 mx-auto border-blue-900" />
                            <h3
                                className="cursor-pointer text-red-600 mt-2"
                                onClick={() => {
                                    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                                    if (isMobile) {
                                        window.location.href = 'mailto:shrawanigaikwad5@gmail.com';
                                    } else {
                                        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=mukkawarshravan04@gmail.com', '_blank');
                                    }
                                }}
                            >
                                mukkawarshravan04@gmail.com
                            </h3>
                        </div>

                        <div className="w-[400px] p-4 bg-blue-100 shadow-md transition hover:shadow-lg text-center border border-blue-900 text-black ">
                            <FaPhone className="mx-auto mb-2" />
                            <h3>Phone</h3>
                            <hr className="w-12 mt-2 mx-auto border-blue-900" />
                            <h3 className="mt-2">+91 8380820541</h3>
                        </div>

                        <div className="w-[400px] p-4 bg-blue-100 shadow-md transition hover:shadow-lg text-center border text-black border-blue-900">
                            <FaLinkedin className="mx-auto mb-2 text-xl" />
                            <h3>Connect on LinkedIn</h3>
                            <hr className="w-12 mt-2 mx-auto border-blue-900" />
                            <h3
                                className="cursor-pointer text-red-600 mt-2"
                                onClick={() => window.open('https://www.linkedin.com/in/shravan-mukkawar-287894249/', '_blank')}
                            >
                                Shravan Mukkawar
                            </h3>
                        </div>
                    </div>

                    <div className="flex justify-center m-[50px] mt-[80px]">
                        <iframe className="w-[800px] h-[400px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5284394173473!2d73.89162507519234!3d18.550199982549074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c11e729583fd%3A0x81be1eb93d3f6472!2sMastercard!5e0!3m2!1sen!2sin!4v1723555491703!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="max-w-6xl ml-auto mr-auto mt-[80px] mb-[80px] bg-gray-300 p-[50px]" style={{
                        backgroundImage: `url('/charity.webp')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                      <div className='flex justify-center'>
    <p className="text-lg text-white text-center mb-6 w-4/5">
        We're here to listen and support. Whether you have questions about our initiatives, want to contribute to our cause, or simply wish to connect, we're eager to hear from you. Let's make a difference together.
    </p>
        </div>

                        <div className="flex justify-around flex-wrap gap-[90px] max-w-4xl mx-auto bg-gray-100 p-[50px] ">
                            <div className="hidden sm:block contact1-pic" data-tilt style={{ transform: 'perspective(500px) rotateX(20deg) rotateY(10deg)', willChange: 'transform' }}>
                                <img src={msg} alt="Contact Image" className='w-[250px] mt-12' />
                            </div>
                            <div>
                                <h1 className="text-gray-600 font-semibold text-3xl text-center">Inquiry</h1>
                                <br />
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="name">
                                            Name
                                        </label>
                                        <input
                                            className="w-full sm:w-[350px] px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                                            type="text"
                                            id="name"
                                            placeholder="Your name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            className="w-full bg-gray-100 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Your email"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="message">
                                            Message
                                        </label>
                                        <textarea
                                            className="w-full px-4 bg-gray-100 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                                            type="text"
                                            id="message"
                                            rows="4"
                                            placeholder="Your message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-md"
                                            type="submit"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
