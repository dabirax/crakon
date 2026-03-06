import { useState } from "react";
import { Link } from "react-router-dom";
import signinImg from "@/assets/signin-artisan.jpg";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate auth
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <div className="bg-card rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-heading font-bold text-primary text-center mb-8">Sign In</h1>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img src={signinImg} alt="Artisan" className="w-32 h-40 object-cover rounded-lg hidden md:block" />

          <form onSubmit={handleSubmit} className="flex-1 w-full space-y-4">
            <div>
              <label className="text-sm font-heading font-semibold text-foreground mb-1 block">Username</label>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground rounded-full hover:bg-crakon-blue-dark"
            >
              Enter
            </Button>
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
