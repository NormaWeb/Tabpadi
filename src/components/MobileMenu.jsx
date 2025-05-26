"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Features", path: "/features" },
    { title: "How It Works", path: "/how-it-works" },
    { title: "About Us", path: "/about" },
  ]

  return (
    <div className="md:hidden">
      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-orange-400 transition-colors">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-900 border-t border-gray-700 z-50">
          <nav className="flex flex-col space-y-4 p-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="text-white hover:text-orange-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link
              href="https://wa.me/"
              className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Chat on WhatsApp
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

export default MobileMenu
