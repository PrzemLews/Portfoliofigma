import { Outlet } from "react-router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
