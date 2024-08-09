import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="flex justify-center items-center gap-3">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "py-2 px-4 rounded-sm bg-green-700 text-white"
              : "py-2 px-4 rounded-sm bg-green-400 text-white"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        {" "}
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive
              ? "py-2 px-4 rounded-sm bg-green-700 text-white"
              : "py-2 px-4 rounded-sm bg-green-400 text-white"
          }
        >
          Cart
        </NavLink>
      </li>

      <li>
        {" "}
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "py-2 px-4 rounded-sm bg-green-700 text-white"
              : "py-2 px-4 rounded-sm bg-green-400 text-white"
          }
        >
          Products
        </NavLink>
      </li>

      <li>
        {" "}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "py-2 px-4 rounded-sm bg-green-700 text-white"
              : "py-2 px-4 rounded-sm bg-green-400 text-white"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </ul>
  );
}
