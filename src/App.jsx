import "./App.css";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Users from "./pages/Users.jsx";
import NotFound from "./pages/NotFound.jsx";
import UserProfile from "./pages/UserProfile.jsx";

import MainLayout from "./layout/MainLayout.jsx";

// import Navigation from "./components/Navigation.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* detta ska vi nu lägga in i vår layout komponent istället */}
      {/* <Navigation /> */}

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            // path="" gör exakt samma sak som index-propen
            // path=""
            element={<Home />}
          />

          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />
          {/* Denna ska vara en dynamisk route */}
          <Route path="users/:id" element={<UserProfile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
