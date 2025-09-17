'use client'

import { useState } from 'react'
import { Instagram, Music, ExternalLink } from 'lucide-react'
import socialPosts from '@/data/social-posts.json'

export default function SocialSection() {
  const [activeTab, setActiveTab] = useState<'instagram' | 'tiktok'>('instagram')

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find out what we're up to</h2>
        </div>

        {/* Social Media Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('instagram')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                activeTab === 'instagram'
                  ? 'bg-white text-otr-orange shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Instagram className="inline h-5 w-5 mr-2" />
              Instagram
            </button>
            <button
              onClick={() => setActiveTab('tiktok')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                activeTab === 'tiktok'
                  ? 'bg-white text-otr-orange shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Music className="inline h-5 w-5 mr-2" />
              TikTok
            </button>
          </div>
        </div>

        {/* Social Media Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialPosts[activeTab].map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={post.thumbnail}
                  alt={post.caption}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  {activeTab === 'instagram' ? (
                    <Instagram className="h-6 w-6 text-white drop-shadow-lg" />
                  ) : (
                    <Music className="h-6 w-6 text-white drop-shadow-lg" />
                  )}
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.caption}
                </p>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-otr-orange hover:text-red-700 font-semibold text-sm transition-colors duration-200"
                >
                  View Post
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Follow Us CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex space-x-4">
            <a
              href="https://instagram.com/ontariotechracing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Follow on Instagram
            </a>
            <a
              href="https://tiktok.com/@ontariotechracing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <Music className="mr-2 h-5 w-5" />
              Follow on TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
