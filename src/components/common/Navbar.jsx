import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import ApiClient from "../../services/ApiClient.js";

function Navbar() {
  const isAuthenticated = ApiClient.isAthenticated();
  const isCustomer = ApiClient.isCustomer();
  const isAdmin = ApiClient.isAdmin();

  const navigate = useNavigate();

  const handleLogout = () => {
    const isLogout = window.confirm("Are you sure you want to logout?");
    if (isLogout) {
      ApiClient.logout();
      navigate("/home");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/home" className="brand-link">
          <svg
            className="hotel-logo"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Modern Hotel Building with Gradient */}
            <defs>
              <linearGradient
                id="hotelGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#007F86" />
                <stop offset="100%" stopColor="#005a5f" />
              </linearGradient>
              <linearGradient
                id="keyGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FF7F50" />
                <stop offset="100%" stopColor="#FF6347" />
              </linearGradient>
            </defs>

            {/* Main Building Structure */}
            <rect
              x="8"
              y="12"
              width="24"
              height="20"
              rx="2"
              fill="url(#hotelGradient)"
            />

            {/* Building Top/Peak */}
            <path d="M8 12L20 4L32 12H8Z" fill="url(#hotelGradient)" />

            {/* Elegant Windows - Top Row */}
            <rect
              x="11"
              y="16"
              width="4"
              height="4"
              rx="0.5"
              fill="white"
              opacity="0.9"
            />
            <rect
              x="17"
              y="16"
              width="4"
              height="4"
              rx="0.5"
              fill="white"
              opacity="0.9"
            />
            <rect
              x="23"
              y="16"
              width="4"
              height="4"
              rx="0.5"
              fill="white"
              opacity="0.9"
            />

            {/* Elegant Windows - Middle Row */}
            <rect
              x="11"
              y="22"
              width="4"
              height="4"
              rx="0.5"
              fill="white"
              opacity="0.9"
            />
            <rect
              x="17"
              y="22"
              width="4"
              height="4"
              rx="0.5"
              fill="white"
              opacity="0.9"
            />
            <rect
              x="23"
              y="22"
              width="4"
              height="4"
              rx="0.5"
              fill="white"
              opacity="0.9"
            />

            {/* Elegant Door */}
            <rect
              x="16"
              y="26"
              width="6"
              height="6"
              rx="1"
              fill="white"
              opacity="0.95"
            />
            <circle cx="20" cy="29" r="0.8" fill="url(#hotelGradient)" />

            {/* Decorative Key Icon - Floating */}
            <g transform="translate(26, 6)">
              <circle cx="6" cy="6" r="5" fill="url(#keyGradient)" />
              <circle cx="6" cy="6" r="3" fill="white" />
              <rect
                x="5.5"
                y="6"
                width="4"
                height="1.5"
                rx="0.75"
                fill="url(#keyGradient)"
              />
              <rect
                x="8.5"
                y="5"
                width="1.5"
                height="4"
                rx="0.75"
                fill="url(#keyGradient)"
              />
            </g>

            {/* Decorative Star/Sparkle */}
            <g transform="translate(4, 8)">
              <path
                d="M2 0L2.5 1.5L4 2L2.5 2.5L2 4L1.5 2.5L0 2L1.5 1.5Z"
                fill="#FFD700"
                opacity="0.8"
              />
            </g>
          </svg>
          <span className="brand-text">Momed Hotel</span>
        </NavLink>
      </div>

      <ul className="navbar-ul">
        <li>
          <NavLink to={"/home"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/rooms"}>Rooms</NavLink>
        </li>
        <li>
          <NavLink to={"/find-booking"}>Find My Bookings</NavLink>
        </li>

        {isCustomer && (
          <li>
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
        )}
        {isAdmin && (
          <li>
            <NavLink to={"/admin"}>Admin</NavLink>
          </li>
        )}

        {!isAuthenticated && (
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
        )}
        {!isAuthenticated && (
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
        )}

        {isAuthenticated && (
          <li className="logout-btn" onClick={handleLogout}>
            Logout
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
