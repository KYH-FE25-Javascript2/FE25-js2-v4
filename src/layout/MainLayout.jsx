import Navigation from "../components/Navigation.jsx";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
