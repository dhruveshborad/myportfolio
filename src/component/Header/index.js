import HeaderNavbar from "../HeaderNavbar";
import Link from "next/link";

const Header = (props) => {
  return (
    <header id="header" className="header-top">
      <div className="container">
        <h1>
          <Link href="/">Dhruvesh B.</Link>
        </h1>
        <HeaderNavbar />
      </div>
    </header>
  );
};
export default Header;
