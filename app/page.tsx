import { Navbar } from '@/components/shared/navbar'
import { Footer } from '@/components/shared/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Briefcase, Users, Target, Trophy } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="flex-1 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4 animate-fadeInUp">
                <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight text-balance">
                  Launch Your Career with Bright
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Discover premium internship opportunities designed to accelerate your professional growth and build your future.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/internships">
                  <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-semibold hover-lift">
                    Explore Internships
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="w-full sm:w-auto px-8 py-3 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary/5 transition-all duration-300">
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="hover-lift">
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Active Positions</p>
                </div>
                <div className="hover-lift">
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Top Companies</p>
                </div>
                <div className="hover-lift">
                  <p className="text-3xl font-bold text-primary">1000+</p>
                  <p className="text-sm text-muted-foreground">Successful Interns</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:block animate-slideInRight">
              <div className="relative h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 flex items-center justify-center hover-glow">
                <div className="text-center space-y-4">
                  <Briefcase className="mx-auto text-primary animate-pulse-soft" size={64} />
                  <p className="text-xl text-muted-foreground font-semibold">Ready to grow?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Bright?</h2>
            <p className="text-xl text-muted-foreground">Everything you need to succeed in your internship journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl border border-border hover-glow hover-lift">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Targeted Positions</h3>
              <p className="text-muted-foreground text-sm">Find internships perfectly matched to your skills and interests.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl border border-border hover-glow hover-lift">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-primary" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Expert Mentorship</h3>
              <p className="text-muted-foreground text-sm">Get guidance from industry professionals throughout your journey.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl border border-border hover-glow hover-lift">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="text-primary" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Real Experience</h3>
              <p className="text-muted-foreground text-sm">Work on meaningful projects that impact real-world business outcomes.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-xl border border-border hover-glow hover-lift">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="text-primary" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Career Growth</h3>
              <p className="text-muted-foreground text-sm">Develop skills and build a professional network for your future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-balance">Ready to Start Your Journey?</h2>
          <p className="text-xl opacity-90">
            Join thousands of students who have launched their careers with Bright internship opportunities.
          </p>
          <Link href="/apply">
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 text-lg font-semibold hover-lift">
              Apply Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
