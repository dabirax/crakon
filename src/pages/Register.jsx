import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-artisans.png";
import artisanImg from "@/assets/artisan-register.jpg";
import customerImg from "@/assets/customer-register.jpg";
import { Button } from "@/components/ui/button";

const Register = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[40vh]  min-h-70 flex items-center">
        <img src={heroImg} alt="Artisans" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
        <Navbar />
        <div className="relative z-10 px-6 md:px-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground leading-tight mt-8 mb-2">
            Find Trusted Artisans<br />Near You
          </h1>
          <p className="text-primary-foreground/80 text-lg">Where experts meets integrity</p>
          <div className="flex gap-4 mt-6">
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

      {/* Register Choice */}
      <section className="crakon-section">
        <h2 className="crakon-section-title">Register</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {/* Customer */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-primary font-heading font-semibold text-center">
              Register as a Customer<br />(Service Seeker)
            </h3>
            <img src={customerImg} alt="Customer" className="w-40 h-40 object-cover rounded-lg" />
            <Link to="/register/customer">
              <Button variant="outline" className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Enter
              </Button>
            </Link>
          </div>

          {/* Artisan */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-primary font-heading font-semibold text-center">
              Register as an Artisan<br />(Service Deliverer)
            </h3>
            <img src={artisanImg} alt="Artisan" className="w-40 h-40 object-cover rounded-lg" />
            <Link to="/register/artisan">
              <Button variant="outline" className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Enter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Register;
