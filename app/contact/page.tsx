'use client'

import { Navbar } from '@/components/shared/navbar'
import { Footer } from '@/components/shared/footer'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Mail, Phone, MapPin, AlertCircle, CheckCircle } from 'lucide-react'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    else if (formData.message.trim().length < 10)
      newErrors.message = 'Message must be at least 10 characters'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              {/* Email */}
              <div className="bg-card p-6 rounded-lg border border-border hover-glow hover-lift">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Email</h3>
                </div>
                <p className="text-muted-foreground mb-3">We&apos;ll get back to you as soon as possible.</p>
                <a
                  href="mailto:hello@TEYZIX CORE.com"
                  className="text-primary font-semibold hover:text-primary/80 transition-all duration-300"
                >
                  hello@TEYZIX CORE.com
                </a>
              </div>

              {/* Phone */}
              <div className="bg-card p-6 rounded-lg border border-border hover-glow hover-lift">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Phone</h3>
                </div>
                <p className="text-muted-foreground mb-3">Available Monday to Friday, 9 AM to 6 PM EST.</p>
                <a
                  href="tel:+1234567890"
                  className="text-primary font-semibold hover:text-primary/80 transition-all duration-300"
                >
                  +1 (234) 567-890
                </a>
              </div>

              {/* Address */}
              <div className="bg-card p-6 rounded-lg border border-border hover-glow hover-lift">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Office</h3>
                </div>
                <p className="text-muted-foreground">
                  123 Innovation Drive
                  <br />
                  San Francisco, CA 94103
                  <br />
                  United States
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg border border-border">
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="mx-auto mb-4 text-green-500" size={64} />
                    <h2 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h2>
                    <p className="text-muted-foreground mb-6">
                      Thank you for contacting us. We&apos;ll get back to you soon.
                    </p>
                    <Button
                      onClick={() => {
                        setSubmitted(false)
                        setFormData({ name: '', email: '', subject: '', message: '' })
                      }}
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${errors.name ? 'border-red-500' : 'border-border'
                          }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <div className="flex items-center gap-2 mt-2 text-sm text-red-500">
                          <AlertCircle size={16} />
                          {errors.name}
                        </div>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${errors.email ? 'border-red-500' : 'border-border'
                          }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <div className="flex items-center gap-2 mt-2 text-sm text-red-500">
                          <AlertCircle size={16} />
                          {errors.email}
                        </div>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${errors.subject ? 'border-red-500' : 'border-border'
                          }`}
                        placeholder="How can we help?"
                      />
                      {errors.subject && (
                        <div className="flex items-center gap-2 mt-2 text-sm text-red-500">
                          <AlertCircle size={16} />
                          {errors.subject}
                        </div>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-border'
                          }`}
                        placeholder="Your message here..."
                      />
                      {errors.message && (
                        <div className="flex items-center gap-2 mt-2 text-sm text-red-500">
                          <AlertCircle size={16} />
                          {errors.message}
                        </div>
                      )}
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex gap-4 pt-4">
                      <Button
                        type="submit"
                        disabled={loading}
                        className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg font-semibold"
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1 border-2 border-primary text-primary hover:bg-primary/5"
                        onClick={() => {
                          setFormData({ name: '', email: '', subject: '', message: '' })
                          setErrors({})
                        }}
                      >
                        Clear
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
