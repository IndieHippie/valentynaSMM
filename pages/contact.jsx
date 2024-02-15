import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

const contact = () => {
  return (
    <div>
      <Hero heading='Let&apos;s work together' message='Submit the form below for more work or contact me on telegram.' />
        <Contact />
    </div>
  )
}

export default contact