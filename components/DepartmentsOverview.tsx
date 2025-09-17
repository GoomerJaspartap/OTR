import { Wrench, Zap, Briefcase, Calculator, Palette, FileText, Camera, Globe, Settings, BarChart3, Shield, Target } from 'lucide-react'

export default function DepartmentsOverview() {
  const departments = [
    {
      name: 'Mechanical',
      icon: Wrench,
      description: 'Design and build the physical components of our race cars',
      roles: ['Chassis Design', 'Suspension', 'Brakes', 'Aerodynamics', 'Manufacturing']
    },
    {
      name: 'Electrical',
      icon: Zap,
      description: 'Develop and integrate electrical systems and battery technology',
      roles: ['Battery Management', 'Motor Control', 'Wiring', 'Sensors', 'Data Acquisition']
    },
    {
      name: 'Business',
      icon: Briefcase,
      description: 'Manage team operations, sponsorships, and marketing',
      roles: ['Sponsorship', 'Marketing', 'Finance', 'Project Management', 'Events']
    },
    {
      name: 'Software',
      icon: Calculator,
      description: 'Develop software for vehicle control and data analysis',
      roles: ['Control Systems', 'Data Analysis', 'Simulation', 'Telemetry', 'Testing']
    },
    {
      name: 'Design',
      icon: Palette,
      description: 'Create visual identity and marketing materials',
      roles: ['Graphic Design', 'Branding', 'Social Media', 'Photography', 'Videography']
    },
    {
      name: 'Documentation',
      icon: FileText,
      description: 'Maintain technical documentation and reports',
      roles: ['Technical Writing', 'Reports', 'Presentations', 'Compliance', 'Archives']
    },
    {
      name: 'Media',
      icon: Camera,
      description: 'Capture and share our team\'s story',
      roles: ['Photography', 'Videography', 'Content Creation', 'Social Media', 'Documentation']
    },
    {
      name: 'Outreach',
      icon: Globe,
      description: 'Connect with the community and promote STEM',
      roles: ['Community Events', 'School Visits', 'STEM Outreach', 'Recruitment', 'Partnerships']
    },
    {
      name: 'Manufacturing',
      icon: Settings,
      description: 'Fabricate and assemble race car components',
      roles: ['CNC Machining', 'Welding', 'Assembly', 'Quality Control', 'Tooling']
    },
    {
      name: 'Strategy',
      icon: BarChart3,
      description: 'Analyze performance and optimize team operations',
      roles: ['Performance Analysis', 'Strategy', 'Competition Planning', 'Data Analysis', 'Optimization']
    },
    {
      name: 'Safety',
      icon: Shield,
      description: 'Ensure team safety and compliance',
      roles: ['Safety Protocols', 'Risk Assessment', 'Compliance', 'Training', 'Emergency Response']
    },
    {
      name: 'Testing',
      icon: Target,
      description: 'Test and validate vehicle performance',
      roles: ['Performance Testing', 'Durability Testing', 'Validation', 'Data Collection', 'Analysis']
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Departments</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find your place in one of our 13 specialized departments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="flex items-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-otr-red/10 rounded-lg mr-4">
                  <dept.icon className="h-6 w-6 text-otr-red" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {dept.name}
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                {dept.description}
              </p>
              <div className="space-y-1">
                {dept.roles.map((role, roleIndex) => (
                  <div
                    key={roleIndex}
                    className="text-xs text-gray-500 bg-white rounded px-2 py-1 inline-block mr-1 mb-1"
                  >
                    {role}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
