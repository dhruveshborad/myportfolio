import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className="social-links">
      <Link
        href="https://x.com/BoradDhruvesh?t=wRcjUXcjXD8gijdH-9hnug&s=08"
        className="twitter"
        target="_blank"
      >
        <i className="bi bi-twitter"></i>
      </Link>

      <Link href="#" className="facebook">
        <i className="bi bi-facebook"></i>
      </Link>

      <Link
        href="https://www.instagram.com/d_j_borad/"
        className="instagram"
        target="_blank"
      >
        <i className="bi bi-instagram"></i>
      </Link>

      <Link
        href="https://www.linkedin.com/in/dhruveshkumar-borad-680505214/"
        className="linkedin"
        target="_blank"
      >
        <i className="bi bi-linkedin"></i>
      </Link>
      <Link
        href="https://github.com/dhruveshborad"
        className="github"
        target="_blank"
      >
        <i className="bi bi-github"></i>
      </Link>
    </div>
  );
};
export default SocialMedia;
