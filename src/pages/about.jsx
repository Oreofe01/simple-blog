import React from 'react'

const About = () => {
    return (
        <div>
            <div className="mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md text-justify">
                    <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                        <p className="text-lg mb-4">Welcome to our blog! We are passionate about sharing knowledge and insights with our readers.</p>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium quam sed lacus dapibus, non dictum libero ullamcorper.</p>
                        <p className="mb-4">Donec dignissim lorem eget lorem porta, at eleifend mauris vestibulum. Fusce volutpat neque ac nisi vehicula, nec luctus metus lobortis.</p>
                        <p className="mb-4">In hac habitasse platea dictumst. Sed non ante eget lorem sagittis tempor sed vel sem.</p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                        <p className="text-lg mb-4">
                            Our mission is to empower individuals with valuable insights, knowledge, and resources through our blog. We strive to make complex topics accessible and inspire our readers to learn and grow.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                        <p className="text-lg mb-4">
                            Our vision is to become a trusted source of information and inspiration for our readers. We aim to foster a community where ideas are shared, questions are answered, and individuals are encouraged to explore new perspectives.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About