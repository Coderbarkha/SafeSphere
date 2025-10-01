import React from 'react'
import FAQ from '../components/FAQ'

export const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-sky-300">About SafeSphere</h1>
  <p className="mt-3 text-sky-600 dark:text-white/80">SafeSphere helps students report concerns safely and anonymously. We partner with campuses to review reports and support victims.</p>

      <div className="mt-8">
        {/* Compact FAQ preview — "See All FAQs" link is inside the component */}
        <FAQ compact={true} />
      </div>
    </div>
  )
}
export default About;