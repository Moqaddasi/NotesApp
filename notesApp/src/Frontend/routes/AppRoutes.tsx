import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import LandingPage from "../pages/firstPage";
import Notes from "../pages/dashboard/notes";
import Home from "../pages/dashboard/home";
import Dashboard from "../pages/dashboard/dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/*" element={<Dashboard />}>
        <Route path="home" element={<Home />} />
        <Route path="notes" element={<Notes />} />
        {/* <Route path="favorites" element={<Favorites />} /> */}
        {/* <Route path="settings" element={<Settings />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
