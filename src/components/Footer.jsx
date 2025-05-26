"use client"

import Link from "next/link"

export default function FooterComponent() {
  const handleGetStartedClick = () => {
    console.log("Footer - Get Started button clicked")
  }

  return (
    <footer className="w-full bg-[#121212] pt-16 pb-8 px-6 md:px-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6 hover:scale-105 transition-transform duration-200">
              <h2 className="text-3xl font-bold">
                <span className="text-white">Tab</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  padi
                </span>
              </h2>
            </Link>
            <p className="text-gray-400 mb-6">
              Tabpadi lets you buy airtime, data, and pay bills easily on WhatsApp. Just chat, pay, and relax
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-orange-400 transition-colors py-1 px-2 rounded hover:bg-gray-800 block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-gray-400 hover:text-orange-400 transition-colors py-1 px-2 rounded hover:bg-gray-800 block"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-400 hover:text-orange-400 transition-colors py-1 px-2 rounded hover:bg-gray-800 block"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-orange-400 transition-colors py-1 px-2 rounded hover:bg-gray-800 block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">LEGAL</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-orange-400 transition-colors py-1 px-2 rounded hover:bg-gray-800 block"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-orange-400 transition-colors py-1 px-2 rounded hover:bg-gray-800 block"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-6">Chat with us anytime on WhatsApp — we're here to help</p>
            <Link href="https://wa.me/">
              <button
                onClick={handleGetStartedClick}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-medium hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm pt-8 border-t border-gray-700">
          © 2025 Tabpadi. Made with ❤️ for simpler payments.
        </div>
      </div>
    </footer>
  )
};
