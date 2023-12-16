import ContactForm from "@/component/conectForm";
import Link from "next/link";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const Contact = () => {
  const postUrl = process.env.MAILCHIMP_ENDPOINT;
  return (
    <section id="contact" className="contact section-show">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Me</p>
        </div>

        <div className="row mt-2">
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="info-box">
              <i className="info bi bi-map"></i>
              <h3>My Address</h3>
              <p>94 Aeligenza Homes, Surat, Guj, In-395006</p>
            </div>
          </div>

          <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
            <div className="info-box">
              <i className="info bi bi-share"></i>
              <h3>Social Profiles</h3>
              <div className="social-links">
                <Link
                  href="https://x.com/BoradDhruvesh?t=wRcjUXcjXD8gijdH-9hnug&s=08"
                  className="twitter"
                  target="_blank"
                >
                  <i className="bi bi-twitter"></i>
                </Link>
                <a href="#" className="facebook">
                  <i className="bi bi-facebook" target="_blank"></i>
                </a>
                <Link
                  href="https://www.instagram.com/d_j_borad/"
                  className="instagram"
                  target="_blank"
                >
                  <i className="bi bi-instagram"></i>
                </Link>
                <Link href="#" className="google-plus" target="_blank">
                  <i className="bi bi-skype"></i>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/dhruveshkumar-borad-680505214/"
                  className="linkedin"
                  target="_blank"
                >
                  <i className="bi bi-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className=" info bi bi-envelope"></i>
              <h3>Email Me</h3>

              <Link href="https://dhruveshborad007@gmail.com">
                <p>dhruveshborad007@gmail.com</p>
              </Link>
            </div>
          </div>
          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="info bi bi-telephone"></i>
              <h3>Call Me</h3>
              <Link href={`tel:${+917698342723}`}>
                <p>+91 76-983-42723</p>
              </Link>
            </div>
          </div>
        </div>
        <MailchimpSubscribe
          url={postUrl}
          render={({ subscribe, status, message }) => {
            console.log("status", status, message);
            return (
              <>
                <ContactForm
                  status={status}
                  message={message}
                  subscribe={subscribe}
                />
                <div className="mail-msg-text">
                  {status === "sending" && <span className="waiting" />}
                  {status === "error" && (
                    <span
                      className="error"
                      dangerouslySetInnerHTML={{
                        __html: String(message),
                      }}
                    />
                  )}
                  {status === "success" && (
                    <span
                      className="success"
                      dangerouslySetInnerHTML={{
                        __html: String(message),
                      }}
                    />
                  )}
                </div>
              </>
            );
          }}
        />
      </div>
    </section>
  );
};
export default Contact;
