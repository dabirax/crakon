import { useState } from "react";
import { Link } from "react-router-dom";
import signinImg from "@/assets/signin-artisan.jpg";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api"; 

const loginUser = async (data) => {
  const response = await api.post("/api/auth/login", {
    email: data.email,
    password: data.password,
  });
  return response.data;
};

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

const { mutate, isLoading } = useMutation({
  mutationFn: loginUser,
  onSuccess: (data) => {
    sessionStorage.setItem("access_token", data.token);
    console.log("Logged in user:", data.user);
    window.location.href = "/welcome";
  },
  onError: (err) => {
    alert(err.response?.data?.message || "Login failed");
    console.error(err);
  },
});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    if (!agreed) {
      alert("You must agree to the Terms and Conditions");
      return;
    }

    mutate({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <div className="bg-card rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-heading font-bold text-primary text-center mb-8">Sign In</h1>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src={signinImg}
            alt="Artisan"
            className="w-32 h-40 object-cover rounded-lg hidden md:block"
          />

          <form onSubmit={handleSubmit} className="flex-1 w-full space-y-4">
            <div>
              <label className="text-sm font-heading font-semibold text-foreground mb-1 block">Email</label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-primary rounded-lg"
              />
            </div>

            <div>
              <label className="text-sm font-heading font-semibold text-foreground mb-1 block">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-primary rounded-lg"
              />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                checked={agreed}
                onCheckedChange={(v) => setAgreed(v)}
                className="border-primary data-[state=checked]:bg-primary"
              />
              <span className="text-xs text-muted-foreground">I agree with the Terms and Conditions</span>
            </div>

            <Link to="#" className="text-xs text-primary hover:underline block text-center">
              Forgot Password
            </Link>

            <Link to="/welcome"><Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-primary-foreground rounded-full hover:bg-crakon-blue-dark"
            >
              {isLoading ? "Signing in..." : "Enter"}
            </Button></Link>
            
          </form>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          If you don't have an account please{" "}
          <Link to="/register" className="text-primary hover:underline font-semibold">click here</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;