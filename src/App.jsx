
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Register from "./pages/Register";
import RegisterArtisan from "./pages/RegisterArtisan";
import RegisterCustomer from "./pages/RegisterCustomer";
import ArtisanProfile from "./pages/ArtisanProfile";
import FindArtisan from "./pages/FindArtisan";
import About from "./pages/About";
import Payments from "./pages/Payments";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/artisan" element={<RegisterArtisan />} />
          <Route path="/register/customer" element={<RegisterCustomer />} />
          <Route path="/artisan-profile" element={<ArtisanProfile />} />
          <Route path="/find-artisan" element={<FindArtisan />} />
          <Route path="/about" element={<About />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
