'use client'

import { useState } from 'react'
import { Mail, Phone, ExternalLink, Send } from 'lucide-react'

export default function BecomeSponsor() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    tier: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-50 rounded-xl shadow-lg p-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-lg text-gray-600 mb-6">
              We've received your sponsorship inquiry. Our team will review your information and get back to you within 2-3 business days.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-otr-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Become a Sponsor</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join us in supporting the next generation of engineers and innovators. 
              Your sponsorship helps us build cutting-edge electric race cars and 
              provides valuable hands-on experience for students.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-otr-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email Us</h3>
                  <p className="text-gray-600">sponsors@ontariotechracing.ca</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-otr-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Call Us</h3>
                  <p className="text-gray-600">+1 (905) 555-0123</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <ExternalLink className="h-6 w-6 text-otr-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Download Sponsorship Package</h3>
                  <a
                    href="/documents/sponsorship-package.pdf"
                    className="text-otr-red hover:text-red-700 font-medium"
                  >
                    View PDF →
                  </a>
                </div>
              </div>
            </div>

            {/* Sponsorship Tiers Overview */}
            <div className="mt-12 bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sponsorship Tiers</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Title Sponsor</span>
                  <span className="font-semibold text-otr-red">$50,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Platinum Sponsor</span>
                  <span className="font-semibold text-otr-red">$25,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Gold Sponsor</span>
                  <span className="font-semibold text-otr-red">$10,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Silver Sponsor</span>
                  <span className="font-semibold text-otr-red">$5,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Bronze Sponsor</span>
                  <span className="font-semibold text-otr-red">$1,000+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-otr-red focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    required
                    value={formData.contactName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-otr-red focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-otr-red focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-otr-red focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="tier" className="block text-sm font-medium text-gray-700 mb-2">
                  Interested Tier
                </label>
                <select
                  id="tier"
                  name="tier"
                  value={formData.tier}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-otr-red focus:border-transparent"
                >
                  <option value="">Select a tier</option>
                  <option value="Title">Title Sponsor ($50,000+)</option>
                  <option value="Platinum">Platinum Sponsor ($25,000+)</option>
                  <option value="Gold">Gold Sponsor ($10,000+)</option>
                  <option value="Silver">Silver Sponsor ($5,000+)</option>
                  <option value="Bronze">Bronze Sponsor ($1,000+)</option>
                  <option value="Other">Other/In-kind</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your company and how you'd like to support our team..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-otr-red focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-otr-red hover:bg-red-700 disabled:bg-gray-400 text-white px-6 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Inquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
