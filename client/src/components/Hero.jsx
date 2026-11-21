import React from 'react'
import { LuSearch, LuMapPin } from "react-icons/lu";

const Hero = () => {
    return (
        <>
            <div
                className="hero"
                style={{
                    backgroundImage:
                        "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LLIIpHC7xca_jYOhG9sHezcBS7JIbNzWdlFmH7df0MB4sydQjy3rdYo&s=10)",
                }}
            >
                <div className="hero-overlay"></div>

                <div className="hero-content py-24 text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold leading-14">New Opportunities Added Every Day</h1>
                        <p className="mb-5">
                            Explore thousands of career opportunities across multiple industries. Discover jobs that match your skills, experience, and interests, connect with leading employers, and take the next step toward building a successful career.
                        </p>

                        <div className="flex items-center w-full bg-white rounded-lg p-1 shadow-sm">

                            {/* Job Search Input */}
                            <div className="flex items-center flex-1 gap-3 px-4">
                                <LuSearch size={25} className="text-gray-500 shrink-0" />
                                <input
                                    type="text"
                                    placeholder="Search for jobs"
                                    className="w-full outline-none text-gray-700 placeholder:text-gray-400 bg-transparent text-lg"
                                />
                            </div>

                            {/* Location Input */}
                            <div className="flex items-center flex-1 gap-3 px-4 border-l border-gray-200">
                                <LuMapPin size={25} className="text-gray-500 shrink-0" />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="w-full outline-none text-gray-700 placeholder:text-gray-400 bg-transparent text-lg"
                                />
                            </div>

                            {/* Search Button */}
                            <button
                                type="submit"
                                className="btn btn-neutral px-10 text-white text-lg font-medium rounded-md"
                            >
                                Search
                            </button>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero