import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <div class="social-links">
        <ul>
          <li>
            <Link
              href="https://x.com/BoradDhruvesh?t=wRcjUXcjXD8gijdH-9hnug&s=08"
              class="twitter"
              target="_blank"
            >
              <i class="bi bi-twitter">twitter</i>
            </Link>
          </li>
          <li>
            <Link href="#" class="facebook">
              <i class="bi bi-facebook">facebook</i>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/d_j_borad/"
              class="instagram"
              target="_blank"
            >
              <i class="bi bi-instagram">instagram</i>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/dhruveshkumar-borad-680505214/"
              class="linkedin"
              target="_blank"
            >
              <i class="bi bi-linkedin">linkedin</i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SocialMedia;
