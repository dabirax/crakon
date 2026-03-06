import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-artisans.png";

const Payments = () => {
  return (
    <div className="min-h-screen bg-background">
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
        <h2 className="crakon-section-title">Payment Information</h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Crakon facilitates secure, integrated payments upon job completion. Our platform supports credit/debit cards and digital wallets to ensure smooth transactions between customers and artisans.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-heading font-bold text-primary mb-3">For Customers</h3>
              <ul className="space-y-2 text-sm">
                <li>• Pay securely after job completion</li>
                <li>• Multiple payment methods accepted</li>
                <li>• Detailed electronic receipts</li>
                <li>• Transparent pricing upfront</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-heading font-bold text-primary mb-3">For Artisans</h3>
              <ul className="space-y-2 text-sm">
                <li>• Track earnings in your dashboard</li>
                <li>• Secure bank payouts</li>
                <li>• Commission transparency</li>
                <li>• Job history and payment records</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Payments;
