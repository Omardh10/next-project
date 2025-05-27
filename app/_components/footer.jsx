import Link from 'next/link'
import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
function Footer() {
    return (
   
            <footer className="bg-[#f9fafb] text-gray-700 border-t border-gray-200 mt-20">
                <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-indigo-600"> name your site</h2>
                        <p className="text-sm text-gray-500">description about your website and explore</p>
                    </div>
                    <div>
                        <h3 className="text-md font-semibold mb-2">The Products</h3>
                        <ul className="space-y-1 text-sm">
                            <li><Link href="#">figma design</Link></li>
                            <li><Link href="#">figma dev</Link></li>
                            <li><Link href="#">system design</Link></li>
                            <li><Link href="#">figma buzz</Link></li>
                            <li><Link href="#">figma draw</Link></li>
                            <li><Link href="#">dev model</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-md font-semibold mb-2">The company</h3>
                        <ul className="space-y-1 text-sm">
                            <li><Link href="#">Who We Are</Link></li>
                            <li><Link href="#">The Blog</Link></li>
                            <li><Link href="#">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-md font-semibold mb-2">Follow us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 hover:text-indigo-500">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-indigo-500">
                                <FaGithub size={20} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-indigo-500">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
    
    )
}

export default Footer
