import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-artisans.png";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const artisans = [
  { name: "Adewale Ogunleye", skill: "Plumber", rating: 4.8, location: "Ikeja, Lagos", experience: "8 years" },
  { name: "Fatimah Bello", skill: "Tailor", rating: 4.9, location: "Akure, Ondo", experience: "12 years" },
  { name: "Chigozie Nwankwo", skill: "Carpenter", rating: 4.7, location: "Enugu", experience: "6 years" },
  { name: "Segun Adeyemi", skill: "Electrician", rating: 4.6, location: "Ibadan, Oyo", experience: "10 years" },
  { name: "Amina Yusuf", skill: "Shoemaker", rating: 4.5, location: "Kano", experience: "5 years" },
  { name: "Emeka Obi", skill: "Painter", rating: 4.8, location: "Abuja", experience: "9 years" },
];

const FindArtisan = () => {
  const [search, setSearch] = useState("");

  const filtered = artisans.filter(
    (a) =>
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.skill.toLowerCase().includes(search.toLowerCase()) ||
      a.location.toLowerCase().includes(search.toLowerCase())
  );

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

      <section className="crakon-section">
        <h2 className="crakon-section-title">Find an Artisan</h2>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-12 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            placeholder="Search by name, skill, or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-12 border-2 border-primary rounded-full h-12"
          />
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((artisan) => (
            <div
              key={artisan.name}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-lg">
                  {artisan.name[0]}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{artisan.name}</h3>
                  <p className="text-sm text-secondary font-semibold">{artisan.skill}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  <span>{artisan.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={14} className="text-secondary fill-secondary" />
                  <span>{artisan.rating} rating</span>
                </div>
                <p>{artisan.experience} experience</p>
              </div>
              <Link
                to="/artisan-profile"
                className="mt-4 block text-center bg-primary text-primary-foreground py-2 rounded-full text-sm font-semibold hover:bg-crakon-blue-dark transition-colors"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FindArtisan;
