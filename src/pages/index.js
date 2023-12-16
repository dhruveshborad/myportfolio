import HeaderNavbar from "@/component/HeaderNavbar";
import SocialMedia from "@/component/SocialMedia";

export default function Home() {
  return (
    <header id="header" className="header">
      <div className="container">
        <h1>DHRUVESH BORAD</h1>
        <h2>
          I'm a Experienced <span>front end developer</span> focused <br />
          on React.js and its frameworks. <br />
          <span>skilled in building scalable</span> web applications with <br />
          clean, maintainable code, proficient in both front-end (React)
          <br /> and back-end (Handless CMS) development
          <br /> for seamless user experiences.
        </h2>
        <HeaderNavbar />
        <SocialMedia />
      </div>
    </header>
  );
}
