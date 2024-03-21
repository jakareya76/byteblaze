import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <nav className="h-[68px]">
        <Navbar />
      </nav>

      <Outlet />
    </>
  );
};

export default MainLayout;
