import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-artisans.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[35vh] min-h-62.5 flex items-center">
        <img src={heroImg} alt="Artisans" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
        <Navbar />
        <div className="relative z-10 px-6 md:px-12 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">About Crakon</h1>
          <p className="text-primary-foreground/80 mt-2">Where experts meets integrity</p>
        </div>
      </section>

      <section className="crakon-section max-w-3xl mx-auto">
        <h2 className="crakon-section-title">About Us</h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Crakon is a modern and reliable service platform designed to seamlessly connect customers with a curated network of highly professional and trustworthy handymen and artisans. Whether you're facing a household crisis or need skilled assistance with a personalized project, Crakon helps to eliminate the guesswork.
          </p>
          <p>
            Our platform specializes in providing reliable access to a diverse range of skilled tradespeople, including plumbers, expert shoemakers, skilled carpenters, professional tailors, and more. Every service provider on our platform goes through a rigorous vetting process to ensure quality and trustworthiness.
          </p>
          <h3 className="text-xl font-heading font-bold text-primary">Our Business Objectives</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Establish Trust and Reliability through rigorous vetting and rating systems</li>
            <li>Streamline Service Booking with simple, intuitive digital interfaces</li>
            <li>Grow the Provider Network with consistent, managed work sources</li>
            <li>Ensure Quality of Service through feedback and conflict resolution</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
