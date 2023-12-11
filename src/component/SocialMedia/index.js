import Image from "next/image";
import Link from "next/link";
import Twitter from "../../../public/assets/twitter.svg";
import Facebook from "../../../public/assets/facebook.svg";
import Instagram from "../../../public/assets/instagram.svg";
import Linkedin from "../../../public/assets/linkedin.svg";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <ul class="socialLinks">
        <li>
          <Link
            href="https://x.com/BoradDhruvesh?t=wRcjUXcjXD8gijdH-9hnug&s=08"
            class="twitter"
            target="_blank"
          >
            <Image src={Twitter} alt="twitter" />
          </Link>
        </li>
        <li>
          <Link href="#" class="facebook">
            <Image src={Facebook} alt="facebook" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/d_j_borad/"
            class="instagram"
            target="_blank"
          >
            <Image src={Instagram} alt="instagram" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/dhruveshkumar-borad-680505214/"
            class="linkedin"
            target="_blank"
          >
            <Image src={Linkedin} alt="linkedin" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default SocialMedia;
