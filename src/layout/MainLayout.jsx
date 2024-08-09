import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

export default function MainLayout() {
  return (
    <div>
      <header className="flex justify-between items-center p-4">
        <h1>Group 4</h1>
        <Navbar />
      </header>
      <Outlet />
    </div>
  );
}
