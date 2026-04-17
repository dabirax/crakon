import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-artisans.png";

const Welcome = () => {
  return (  <div className="min-h-screen bg-background">
      <section className="relative h-[35vh] min-h-62.5 flex items-center">
        <img src={heroImg} alt="Artisans" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
        <Navbar />
        <div className="relative z-10 px-6 md:px-12 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">Payments</h1>
          <p className="text-primary-foreground/80 mt-2">Secure, transparent payment processing</p>
        </div>
      </section>

      <section className="crakon-section max-w-3xl mx-auto">
        <h2 className="crakon-section-title">Welcome User</h2>
        
      </section>

      <Footer />
    </div>
  )
}

export default Welcome