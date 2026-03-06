import { Link } from "react-router-dom";
import crakonLogo from "@/assets/logo.png";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-background">
      {/* CTA Section */}
      <div className="text-center py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
          Get the job done right– Every time.
        </h2>
        <Link
          to="/register"
          className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-semibold hover:bg-crakon-orange-hover transition-colors"
        >
          Get Started
        </Link>
      </div>

      {/* Blue diagonal section */}
      <div className="relative overflow-hidden">
        <svg viewBox="0 0 1440 200" className="w-full" preserveAspectRatio="none">
          <polygon fill="hsl(220, 80%, 35%)" points="0,200 1440,200 1440,0 720,100 0,0" />
        </svg>
        <div className="bg-primary px-6 md:px-12 pb-8 pt-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
            {/* Logo & socials */}
            <div className="flex flex-col items-start gap-3">
              <div className="flex items-center gap-2">
                <img src={crakonLogo} alt="Crakon" className="w-18" />
              </div>
              <div className="flex gap-3">
                {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="text-secondary hover:text-secondary/80 transition-colors">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
              <span className="text-primary-foreground/70 text-xs">@crakonservices.com</span>
            </div>

            {/* Info box */}
            <div className="bg-primary/80 border border-primary-foreground/20 rounded-lg px-6 py-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-primary-foreground/80">
              <div>
                <h4 className="font-heading font-semibold text-primary-foreground mb-2">Book a Service</h4>
                <p>About Us</p>
                <p>Artisans</p>
                <p>Payments</p>
                <p>Policies</p>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-primary-foreground mb-2">Contact</h4>
                <p>26, Ikeja Street, Akure Nigeria</p>
                <p>@crakonartisans.com</p>
                <p>07061007825</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-crakon-blue-dark py-3 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 text-xs text-primary-foreground/60">
          {["Help Center", "Terms of Service", "Privacy Policy", "FAQs", "Community Guidelines", "Send Feedback", "@crakonContacts"].map((item) => (
            <a key={item} href="#" className="hover:text-primary-foreground transition-colors">{item}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
