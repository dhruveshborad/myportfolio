import HeaderNavbar from "@/component/HeaderNavbar";
import SocialMedia from "@/component/SocialMedia";
import Me from "../../public/assets/me.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="titleDes">
        <h1>DHRUVESH BORAD</h1>
        <h3>
          Experienced Full-stack Developer focused on React.js, skilled in
          building scalable web applications with clean, maintainable code,
          proficient in both front-end (React) and back-end (Node.js)
          development for seamless user experiences.
        </h3>
        <div>
          <HeaderNavbar />
          <SocialMedia />
        </div>
      </div>
      <div className="MyPhoto">
        <Image src={Me} alt="image" />
      </div>
    </div>
  );
}
