'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Linkedin, ExternalLink } from 'lucide-react'
import teamMembers from '@/data/team-members.json'

export default function TeamDepartments() {
  const [activeDepartment, setActiveDepartment] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Departments</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the talented students who make our electric race cars possible
          </p>
        </div>

        {/* Department Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {teamMembers.departments.map((dept, index) => (
            <button
              key={dept.name}
              onClick={() => setActiveDepartment(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeDepartment === index
                  ? 'bg-otr-red text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {dept.name} ({dept.members.length})
            </button>
          ))}
        </div>

        {/* Department Members */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {teamMembers.departments[activeDepartment].name} Department
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.departments[activeDepartment].members.map((member) => (
              <div
                key={member.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* LinkedIn Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 backdrop-blur-sm text-otr-red p-2 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-otr-red font-medium mb-3">
                    {member.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    {member.department} Department
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Department Stats */}
        <div className="bg-gray-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-otr-red mb-2">
                {teamMembers.departments[activeDepartment].members.length}
              </div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-otr-red mb-2">
                {teamMembers.departments.length}
              </div>
              <div className="text-gray-600">Total Departments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-otr-red mb-2">
                {teamMembers.departments.reduce((total, dept) => total + dept.members.length, 0)}
              </div>
              <div className="text-gray-600">Total Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
