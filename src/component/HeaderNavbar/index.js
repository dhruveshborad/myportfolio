import Link from "next/link";

const HeaderNavbar = () => {
  return (
    <nav id="navbar" className="navbar">
      <ul>
        <li>
          <Link className="nav-link active" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" href="/resume">
            Resume
          </Link>
        </li>
        <li>
          <Link className="nav-link" href="/services">
            Services
          </Link>
        </li>
        <li>
          <Link className="nav-link" href="/portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link className="nav-link" href="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>
  );
};
export default HeaderNavbar;
