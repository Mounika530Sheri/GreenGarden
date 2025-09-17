import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from './Footer'

export default function MainNavbar() {
  return (
    <>
      <Navbar />
      <main className="outer">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
