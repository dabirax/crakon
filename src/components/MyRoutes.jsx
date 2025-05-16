import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import Login from "../Pages/Login.jsx";
import Signup from "../Pages/Signup.jsx";
import UserProfile from "../Pages/UserProfile.jsx";
import Landing from "../Pages/Landing";
import CustSignUp from "../Pages/CustSignUp.jsx";
import Craftsman from "../Pages/Craftsman.jsx";
import Loading from "../Pages/loading.jsx";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/CustSignUp" element={<CustSignUp />} />
        <Route path="/Craftsman" element={<Craftsman />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/loading" element={<Loading/>} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
