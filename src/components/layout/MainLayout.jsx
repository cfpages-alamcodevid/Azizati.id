import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 min-w-0 pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
