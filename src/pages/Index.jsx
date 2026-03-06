import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-artisans.png";
import missionIcon from "@/assets/red-target.jpg";
import crakonLogo from "@/assets/craftLogo.png";
import maleAvatar from "@/assets/male-avatar.jpg";
import femaleAvatar from "@/assets/female-avatar.jpg";
import obj1 from "@/assets/obj1.jpg"
import obj2 from "@/assets/obj2.png"
import obj3 from "@/assets/obj3.jpg"
import { Link } from "react-router-dom";
import { Scale, Heart, Handshake, ShieldCheck } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[85vh] min-h-125 flex items-center">
        <img src={heroImg} alt="Artisans at work" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
        <Navbar />
        <div className="relative z-10 px-6 md:px-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-4 animate-fade-in-up">
            Find Trusted Artisans<br />Near You
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-8 font-body">
            Where experts meets integrity
          </p>
          <div className="flex gap-4">
            <Link
              to="/find-artisan"
              className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold text-sm hover:bg-crakon-orange-hover transition-colors"
            >
              Find an Artisan
            </Link>
            <Link
              to="/register"
              className="border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
            >
              Join as an Artisan
            </Link>
          </div>
        </div>
      </section>

      {/* Why Crakon */}
      <section className="py-4 rounded-b-2xl px-8 md:px-16 max-w-7xl mx-auto bg-muted ">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Why Crakon</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h3 className="text-xl font-heading font-semibold text-primary mb-4">Our Mission and Aim</h3>
            <p className="text-muted-foreground leading-relaxed">
              Crakon is a modern and reliable service platform designed to seamlessly connect customers with a curated network of highly professional and trustworthy handymen and artisans. Whether you're facing a household crisis or need skilled assistance with a personalized project, Crakon helps to eliminate the guesswork. Our platform specializes in providing reliable access to a diverse range of skilled tradespeople.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={crakonLogo} alt="Crakon Logo" className="w-60 h-60 object-contain rounded-4xl" />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Our Mission</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <img src={missionIcon} alt="Mission" className="w-60 h-60 object-contain" />
          </div>
          <div className="md:w-2/3">
            <p className="text-muted-foreground leading-relaxed">
              To eliminate the customer difficulty and anxiety associated with finding dependable, skilled service professionals by implementing a rigorous vetting and rating system. We provide a simple, intuitive, and efficient digital interface for customers to identify, book, and pay for services offered by vetted professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Our Objectives */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-muted rounded-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Our Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { title: "To improve trust between Customers and Artisans", image: obj1 },
            { title: "To streamline service booking and payments", image: obj2 },
            { title: "To provide a secured payment system", image: obj3 },
          ].map((obj, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="bg-muted flex items-center justify-center">
                <img src={obj.image} className="w-30 h-24 rounded-full object-cover"/>
              </div>
              <p className="text-primary font-medium text-sm">{obj.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="ctext-3xl md:text-4xl font-bold text-primary text-center mb-12">Our Core Values</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
                  {[
  { label: "Integrity", Icon: Scale },
  { label: "Respect", Icon: Heart },
  { label: "Trust", Icon: Handshake },
  { label: "Honesty", Icon: ShieldCheck },
].map(({ label, Icon }) => (
  <div key={label} className="flex flex-col items-center gap-3">
    <Icon className="w-16 h-16 text-primary" strokeWidth={1.2} />
    <span className="text-primary font-heading font-semibold">{label}</span>
  </div>
))}
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Dahunsi Ayomiku", img: femaleAvatar },
            { name: "Olukiran Dabira", img: maleAvatar },
            { name: "Osenix Oluwabunmi", img: femaleAvatar },
            { name: "Isa John", img: maleAvatar },
          ].map((member) => (
            <div key={member.name} className="relative group overflow-hidden rounded-lg">
              <img
                src={member.img}
                alt={member.name}
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-primary/90 py-2 px-3">
                <p className="text-primary-foreground text-xs md:text-sm font-heading font-semibold text-center">
                  {member.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
