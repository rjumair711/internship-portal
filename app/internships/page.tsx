'use client'

import { Navbar } from '@/components/shared/navbar'
import { Footer } from '@/components/shared/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MapPin, Briefcase, Clock, Badge } from 'lucide-react'
import { useState } from 'react'

interface Internship {
  id: string
  title: string
  company: string
  location: string
  type: string
  duration: string
  description: string
  skills: string[]
  stipend: string
}

const internships: Internship[] = [
  {
    id: '1',
    title: 'Frontend Developer Internship',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    type: 'Full-time',
    duration: '3 months',
    description: 'Build beautiful user interfaces and work on cutting-edge web technologies. You&apos;ll collaborate with senior developers and contribute to real products.',
    skills: ['React', 'TypeScript', 'CSS', 'Next.js'],
    stipend: '$15/hour'
  },
  {
    id: '2',
    title: 'Backend Developer Internship',
    company: 'CloudSystems',
    location: 'Seattle, WA',
    type: 'Full-time',
    duration: '4 months',
    description: 'Design and maintain scalable backend systems. Work with databases, APIs, and microservices in a collaborative environment.',
    skills: ['Python', 'Node.js', 'PostgreSQL', 'Docker'],
    stipend: '$16/hour'
  },
  {
    id: '3',
    title: 'Product Manager Internship',
    company: 'InnovateLabs',
    location: 'Austin, TX',
    type: 'Full-time',
    duration: '3 months',
    description: 'Guide product strategy and work cross-functionally with design and engineering teams. Analyze user needs and drive product decisions.',
    skills: ['Product Strategy', 'Analytics', 'User Research', 'Communication'],
    stipend: '$14/hour'
  },
  {
    id: '4',
    title: 'Data Science Internship',
    company: 'DataInsights',
    location: 'New York, NY',
    type: 'Full-time',
    duration: '3 months',
    description: 'Work with large datasets and develop machine learning models. Apply statistical analysis to solve real business problems.',
    skills: ['Python', 'Machine Learning', 'SQL', 'Tableau'],
    stipend: '$17/hour'
  },
  {
    id: '5',
    title: 'UI/UX Designer Internship',
    company: 'DesignStudio',
    location: 'Los Angeles, CA',
    type: 'Part-time',
    duration: '4 months',
    description: 'Create intuitive and beautiful designs for web and mobile applications. Collaborate with product and engineering teams.',
    skills: ['Figma', 'UI Design', 'User Research', 'Prototyping'],
    stipend: '$12/hour'
  },
  {
    id: '6',
    title: 'Marketing Internship',
    company: 'GrowthCo',
    location: 'Boston, MA',
    type: 'Full-time',
    duration: '3 months',
    description: 'Develop marketing strategies and campaigns. Analyze market trends and help grow our brand presence across channels.',
    skills: ['Content Marketing', 'Analytics', 'Social Media', 'SEO'],
    stipend: '$13/hour'
  },
]

export default function InternshipsPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const filteredInternships = selectedType
    ? internships.filter(i => i.type === selectedType)
    : internships

  const types = Array.from(new Set(internships.map(i => i.type)))

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Explore Internships</h1>
          <p className="text-lg text-muted-foreground">
            Discover {internships.length}+ available positions from top companies
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters */}
            <div className="lg:col-span-1">
              <div className="bg-card p-6 rounded-lg border border-border sticky top-24">
                <h3 className="font-semibold text-foreground mb-4">Filter by Type</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedType(null)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedType === null
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-background text-foreground hover:bg-muted'
                    }`}
                  >
                    All Types
                  </button>
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedType === type
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-background text-foreground hover:bg-muted'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Internship Cards */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {filteredInternships.map((internship) => (
                  <div
                    key={internship.id}
                    className="bg-white p-6 rounded-lg border border-border hover-glow hover-lift"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">{internship.title}</h2>
                        <p className="text-lg text-primary font-semibold mt-1">{internship.company}</p>
                      </div>
                      <Link href={`/apply?internship=${internship.id}`}>
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap">
                          Apply Now
                        </Button>
                      </Link>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{internship.description}</p>

                    {/* Meta Info */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4 py-4 border-y border-border">
                      <div className="flex items-center space-x-2">
                        <MapPin size={18} className="text-primary" />
                        <span className="text-sm text-foreground">{internship.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Briefcase size={18} className="text-primary" />
                        <span className="text-sm text-foreground">{internship.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={18} className="text-primary" />
                        <span className="text-sm text-foreground">{internship.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge size={18} className="text-primary" />
                        <span className="text-sm text-foreground font-semibold">{internship.stipend}</span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
