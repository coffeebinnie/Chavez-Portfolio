import { Outlet } from "react-router";
import Navbar from "../components/common/Navbar";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}