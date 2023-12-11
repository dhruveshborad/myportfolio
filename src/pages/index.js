import HeaderNavbar from "@/component/HeaderNavbar";
import SocialMedia from "@/component/SocialMedia";

export default function Home() {
  return (
    <>
      <div>
        <h1>DHRUVESH BORAD</h1>
        <p>
          Experienced Full-stack Developer with a focus on React.js, skilled in
          building scalable web applications with clean, maintainable code.
          Proficient in both front-end development using React and back-end
          technologies like Node.js, dedicated to delivering seamless user
          experiences and staying abreast of the latest React.js advancements.
        </p>
        <div>
          <HeaderNavbar />
          <SocialMedia />
        </div>
      </div>
    </>
  );
}
