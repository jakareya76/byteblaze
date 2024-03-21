import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <nav className="h-16">
        <Navbar />
      </nav>
      <main className="min-h-[calc(100vh-117px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
