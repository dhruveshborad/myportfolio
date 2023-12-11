import Link from "next/link";

const HeaderNavbar = () => {
  return (
    <nav id="navbar" class="navbar">
      <li>
        <Link class="nav-link active" href="/">
          Home
        </Link>
      </li>
      <li>
        <Link class="nav-link" href="/about">
          About
        </Link>
      </li>
      <li>
        <Link class="nav-link" href="/resume">
          Resume
        </Link>
      </li>
      <li>
        <Link class="nav-link" href="/services">
          Services
        </Link>
      </li>
      <li>
        <Link class="nav-link" href="/portfolio">
          Portfolio
        </Link>
      </li>
      <li>
        <Link class="nav-link" href="/contact">
          Contact
        </Link>
      </li>
    </nav>
  );
};
export default HeaderNavbar;
