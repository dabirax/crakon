import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-artisans.png";
import { Link } from "react-router-dom";
import {useRegisterCustomer} from '@/hooks/useRegister'

const RegisterCustomer = () => {
  const [form, setForm] = useState({
    fullName: "",
    location: "",
    phoneNumber: "",
    email: "",       
    password: "",    
  confirmPassword: "",
  });

  const { mutate, isLoading} = useRegisterCustomer();

  const update = (key, value) =>
    setForm((p) => ({ ...p, [key]: value }));

  const handleSubmit = (e) => {
  e.preventDefault();

  // simple front-end validation
  if (!form.fullName || !form.email || !form.password || !form.confirmPassword) {
    alert("Please fill all required fields");
    return;
  }

  

  // call mutation
  mutate(
    {
      fullName: form.fullName,
      email: form.email,
      password: form.password,
    },
    {
      onSuccess: (data) => {
        localStorage.setItem("token", data.token);
        console.log("User registered:", data.user);
        // window.location.href = "/welcome";
      },
      onError: (err) => {
        console.error(err);
        alert(
          err.response?.data?.message || "Registration failed, check console"
        );
      },
    }
  );
};

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[35vh] min-h-62.5 flex items-center">
        <img
          src={heroImg}
          alt="Artisans"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <Navbar />
        <div className="relative z-10 px-6 md:px-12 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground leading-tight">
            Find Trusted Artisans Near You
          </h1>
          <p className="text-primary-foreground/80 mt-2">
            Where experts meets integrity
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              to="/find-artisan"
              className="bg-secondary text-secondary-foreground px-5 py-2 rounded-full font-semibold text-sm"
            >
              Find an Artisan
            </Link>
            <Link
              to="/register"
              className="border-2 border-primary-foreground text-primary-foreground px-5 py-2 rounded-full font-semibold text-sm"
            >
              Join as an Artisan
            </Link>
          </div>
        </div>
      </section>

      <section className="crakon-section max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary text-center mb-8">
          Register as a Customer
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-lg font-heading font-bold text-primary mb-4">
            Basic Information
          </h3>
          {[
            { label: "Full Name", key: "fullName" },
            { label: "Email", key: "email" },
            { label: "Location", key: "location" },
            { label: "Phone Number", key: "phoneNumber" },
            { label: "Password", key: "password" },
            { label: "Confirm Password", key: "confirmPassword" },
          ].map(({ label, key }) => (
            <div key={key} className="mb-4">
              <label className="text-sm font-heading font-semibold text-foreground mb-1 block">
                {label}
              </label>
              <Input
                value={form[key]}
                onChange={(e) => update(key, e.target.value)}
                className="border-2 border-primary rounded-lg"
              />
            </div>
          ))}

          <div className="text-center">
            <Button
              type="submit" disabled={isLoading}
              className="bg-primary text-primary-foreground rounded-full px-10 hover:bg-crakon-blue-dark"
            >
        {isLoading ? "Registering..." : "Enter"}
      </Button>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default RegisterCustomer;
