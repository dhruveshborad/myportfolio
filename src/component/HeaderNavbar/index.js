import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const HeaderNavbar = (props) => {
  const router = useRouter();
  const [menuBarActive, setMenuBarActive] = useState(false);
  return (
    <nav
      id="navbar"
      className={`navbar ${menuBarActive ? "navbar-mobile" : ""}`}
    >
      <ul>
        <li>
          <Link
            className={`nav-link ${router.pathname === "/" ? "active" : ""}`}
            href="/"
            onClick={() => setMenuBarActive(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link ${
              router.pathname === "/about" ? "active" : ""
            }`}
            href="/about"
            onClick={() => setMenuBarActive(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link ${
              router.pathname === "/resume" ? "active" : ""
            }`}
            href="/resume"
            onClick={() => setMenuBarActive(false)}
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link ${
              router.pathname === "/services" ? "active" : ""
            }`}
            href="/services"
            onClick={() => setMenuBarActive(false)}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link ${
              router.pathname === "/portfolio" ? "active" : ""
            }`}
            href="/portfolio"
            onClick={() => setMenuBarActive(false)}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link ${
              router.pathname === "/contact" ? "active" : ""
            }`}
            href="/contact"
            onClick={() => setMenuBarActive(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
      <i
        className={`${
          menuBarActive
            ? "bi mobile-nav-toggle bi-x"
            : "bi bi-list mobile-nav-toggle"
        }`}
        onClick={() => setMenuBarActive(!menuBarActive)}
      ></i>
    </nav>
  );
};
export default HeaderNavbar;
