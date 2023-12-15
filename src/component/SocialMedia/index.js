import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className="social-links">
      <Link
        href="https://x.com/BoradDhruvesh?t=wRcjUXcjXD8gijdH-9hnug&s=08"
        className="twitter"
        target="_blank"
      >
        <i class="bi bi-twitter"></i>
      </Link>

      <Link href="#" className="facebook">
        <i class="bi bi-facebook"></i>
      </Link>

      <Link
        href="https://www.instagram.com/d_j_borad/"
        className="instagram"
        target="_blank"
      >
        <i class="bi bi-instagram"></i>
      </Link>

      <Link
        href="https://www.linkedin.com/in/dhruveshkumar-borad-680505214/"
        className="linkedin"
        target="_blank"
      >
        <i class="bi bi-linkedin"></i>
      </Link>
    </div>
  );
};
export default SocialMedia;
