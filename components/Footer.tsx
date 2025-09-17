import { Mail, MapPin, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-otr-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/otr-logo.png"
                alt="Ontario Tech Racing Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">Ontario Tech Racing</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              A team of passionate engineering and business students designing, 
              manufacturing, and marketing Formula-style electric race cars.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/ontariotechracing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-otr-orange transition-colors duration-200"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com/@ontariotechracing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-otr-orange transition-colors duration-200"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/team" className="text-gray-300 hover:text-otr-red transition-colors duration-200">Team</a></li>
              <li><a href="/join" className="text-gray-300 hover:text-otr-red transition-colors duration-200">Join Us</a></li>
              <li><a href="/sponsors" className="text-gray-300 hover:text-otr-red transition-colors duration-200">Sponsors</a></li>
              <li><a href="/history" className="text-gray-300 hover:text-otr-red transition-colors duration-200">History</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-otr-orange" />
                <span className="text-gray-300">racing@ontariotechu.ca</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-otr-orange" />
                <span className="text-gray-300">Ontario Tech University</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Ontario Tech Racing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
