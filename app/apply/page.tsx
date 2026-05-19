'use client'

import { Navbar } from '@/components/shared/navbar'
import { Footer } from '@/components/shared/footer'
import { Button } from '@/components/ui/button'
import { useState, Suspense } from 'react'
import {  CheckCircle } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'

interface FormData {
  fullName: string
  email: string
  phone: string
  university: string
  major: string
  graduation: string
  position: string
  resume: File | null
  coverLetter: string
  skills: string
  experience: string
}

interface FormErrors {
  [key: string]: string
}

function ApplyPageContent() {
  const searchParams = useSearchParams()
  const selectedPosition = searchParams.get('internship') || ''

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    major: '',
    graduation: '',
    position: selectedPosition || '',
    resume: null,
    coverLetter: '',
    skills: '',
    experience: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim())
      newErrors.fullName = 'Full name is required'

    if (!formData.email.trim())
      newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email'

    if (!formData.phone.trim())
      newErrors.phone = 'Phone number is required'

    if (!formData.university.trim())
      newErrors.university = 'University is required'

    if (!formData.major.trim())
      newErrors.major = 'Major is required'

    if (!formData.graduation.trim())
      newErrors.graduation = 'Graduation date is required'

    if (!formData.position.trim())
      newErrors.position = 'Please select a position'

    if (!formData.coverLetter.trim())
      newErrors.coverLetter = 'Cover letter is required'

    if (!formData.skills.trim())
      newErrors.skills = 'Please list your skills'

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0] || null

    setFormData((prev) => ({
      ...prev,
      resume: file,
    }))
  }

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    try {
      const response = await axios.post(
        '/api/apply',
        {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          domain: formData.position,
          message: formData.coverLetter,
        }
      )

      console.log(response.data)

      setSubmitted(true)

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        university: '',
        major: '',
        graduation: '',
        position: '',
        resume: null,
        coverLetter: '',
        skills: '',
        experience: '',
      })
    } catch (error) {
      console.error('Submission Error:', error)
      alert('Something went wrong while submitting.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />

        <section className="flex-1 py-20 px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl mx-auto w-full text-center">
            <div className="bg-white p-12 rounded-xl border border-border">
              <div className="flex justify-center mb-6">
                <CheckCircle
                  size={64}
                  className="text-green-500"
                />
              </div>

              <h1 className="text-4xl font-bold text-foreground mb-4">
                Application Submitted!
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Thank you for applying to TEYZIX CORE.
              </p>

              <Button
                onClick={() => setSubmitted(false)}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Submit Another Application
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <section className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Apply Now
            </h1>

            <p className="text-lg text-muted-foreground">
              Join TEYZIX CORE Internship Program
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg border border-border space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-lg"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-4 py-3 border rounded-lg"
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                className="w-full px-4 py-3 border rounded-lg"
              />

              <input
                type="text"
                name="university"
                value={formData.university}
                onChange={handleInputChange}
                placeholder="University"
                className="w-full px-4 py-3 border rounded-lg"
              />

              <input
                type="text"
                name="major"
                value={formData.major}
                onChange={handleInputChange}
                placeholder="Major"
                className="w-full px-4 py-3 border rounded-lg"
              />

              <input
                type="month"
                name="graduation"
                value={formData.graduation}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-lg"
              />

              <select
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-lg sm:col-span-2"
              >
                <option value="">Select Position</option>
                <option value="Frontend Developer">
                  Frontend Developer Internship
                </option>
                <option value="Backend Developer">
                  Backend Developer Internship
                </option>
                <option value="Data Science">
                  Data Science Internship
                </option>
                <option value="UI/UX Design">
                  UI/UX Design Internship
                </option>
              </select>

              <textarea
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                placeholder="Skills"
                rows={3}
                className="w-full px-4 py-3 border rounded-lg sm:col-span-2"
              />

              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="Experience"
                rows={3}
                className="w-full px-4 py-3 border rounded-lg sm:col-span-2"
              />

              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                placeholder="Cover Letter"
                rows={5}
                className="w-full px-4 py-3 border rounded-lg sm:col-span-2"
              />

              <div className="sm:col-span-2">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="w-full border rounded-lg p-3"
                />
              </div>

            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full py-3 text-lg"
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ApplyPageContent />
    </Suspense>
  )
}