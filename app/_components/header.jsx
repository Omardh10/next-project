"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import './header.css'
import { HiMenu, HiX } from "react-icons/hi";
function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    return (
        <div className='navigation'>

         <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Desktop Links */}
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-blue-600">Figma</div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#" className="text-gray-600 hover:text-blue-600">Products</Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">Solutions</Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">Community</Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">Resources</Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">Pricing</Link>
            </div>
          </div>

        
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#" className="text-gray-600 hover:text-blue-600 px-4 py-2">
              Login
            </Link>
            <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              Get started for free
            </Link>
          </div>


          <button
            className="md:hidden text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          <Link href="#" className="block text-gray-700 hover:text-blue-600">Products</Link>
          <Link href="#" className="block text-gray-700 hover:text-blue-600">Solutions</Link>
          <Link href="#" className="block text-gray-700 hover:text-blue-600">Community</Link>
          <Link href="#" className="block text-gray-700 hover:text-blue-600">Resources</Link>
          <Link href="#" className="block text-gray-700 hover:text-blue-600">Pricing</Link>
          <hr />
          <Link href="#" className="block text-gray-700 hover:text-blue-600">Login</Link>
          <Link href="#" className="block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-center">
            Get started for free
          </Link>
        </div>
      )}
    </nav>
        </div>
    )
}

export default Header
