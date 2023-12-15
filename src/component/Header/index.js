import HeaderNavbar from "../HeaderNavbar";

const Header = (props) => {
  return (
    <header id="header" className="header-top">
      <div className="container">
        <h1>Dhruvesh B.</h1>
        <h2>
          I'm a <span>front end developer</span> from India</h2>
        <HeaderNavbar />
      </div>
    </header>
  );
};
export default Header;
