import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-artisans.png";
import signinImg from "@/assets/signin-artisan.jpg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ArtisanProfile = () => {
  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    shopLocation: "",
    skillSet: "",
    yearsOfExperience: "",
    levelOfExperience: "",
    tradeUnionId: "",
  });

  const update = (key, value) => setForm((p) => ({ ...p, [key]: value }));

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[35vh] min-h-62.5 flex items-center">
        <img src={heroImg} alt="Artisans" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
        <Navbar />
        <div className="relative z-10 px-6 md:px-12 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">Find Trusted Artisans Near You</h1>
          <p className="text-primary-foreground/80 mt-2">Where experts meets integrity</p>
          <div className="flex gap-4 mt-4">
            <Link to="/find-artisan" className="bg-secondary text-secondary-foreground px-5 py-2 rounded-full font-semibold text-sm">Find an Artisan</Link>
            <Link to="/register" className="border-2 border-primary-foreground text-primary-foreground px-5 py-2 rounded-full font-semibold text-sm">Join as an Artisan</Link>
          </div>
        </div>
      </section>

      <section className="crakon-section max-w-3xl mx-auto">
        <h2 className="text-2xl font-heading font-bold text-primary text-center mb-8">Artisan Profile</h2>

        <div className="flex flex-col md:flex-row gap-8">
          <img src={signinImg} alt="Profile" className="w-40 h-48 object-cover rounded-lg" />

          <div className="flex-1 space-y-4">
            <h3 className="text-lg font-heading font-bold text-primary">Basic Information</h3>
            {[
              { label: "Full Name", key: "fullName" },
              { label: "Phone Number", key: "phoneNumber" },
              { label: "Email Address", key: "emailAddress" },
              { label: "Shop Location", key: "shopLocation" },
            ].map(({ label, key }) => (
              <div key={key}>
                <label className="text-sm font-heading font-semibold text-primary mb-1 block">{label}</label>
                <Input
                  value={form[key]}
                  onChange={(e) => update(key, e.target.value)}
                  className="border-2 border-primary rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <h3 className="text-lg font-heading font-bold text-primary">Expertise Information</h3>
          {[
            { label: "Skill Set", key: "skillSet" },
            { label: "Years of Experience", key: "yearsOfExperience" },
            { label: "Level of Experience", key: "levelOfExperience" },
            { label: "Trade Union Identification Number", key: "tradeUnionId" },
          ].map(({ label, key }) => (
            <div key={key}>
              <label className="text-sm font-heading font-semibold text-primary mb-1 block">{label}</label>
              <Input
                value={form[key]}
                onChange={(e) => update(key, e.target.value)}
                className="border-2 border-primary rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-heading font-bold text-primary mb-4">Your Latest work and certification</h3>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-muted rounded-lg border-2 border-dashed border-border flex items-center justify-center text-muted-foreground text-xs">
                + Add
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-8 justify-center">
          <Button className="bg-primary text-primary-foreground rounded-lg px-8 hover:bg-crakon-blue-dark">
            Save Changes
          </Button>
          <Button variant="outline" className="border-2 border-muted-foreground text-muted-foreground rounded-lg px-8">
            Discard Changes
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArtisanProfile;
