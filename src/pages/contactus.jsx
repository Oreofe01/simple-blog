import React from 'react'

const ContactUs = () => {
    return (
        <div>
            {/* <h4>Contact Page</h4> */}

            <div className="min-h-screen flex justify-center items-center bg-gray-100">
                <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow border rounded w-full py-2 px-3 leading-tight text-gray-700 outline-none"
                                id="name"
                                type="text"
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none"
                                id="email"
                                type="email"
                                placeholder="Your Email"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none"
                                id="message"
                                rows="5"
                                placeholder="Your Message"
                            ></textarea>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                                type="submit"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ContactUs