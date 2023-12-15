import Link from "next/link";

const Contact = () => {
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
              <p>dhruveshborad007@gmail.com</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="info bi bi-telephone"></i>
              <h3>Call Me</h3>
              <p>+91 7698342723</p>
            </div>
          </div>
        </div>

        <form
          action="forms/contact.php"
          method="post"
          role="form"
          className="php-email-form mt-4"
        >
          <div className="row">
            <div className="col-md-6 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">
              Your message has been sent. Thank you!
            </div>
          </div>
          <div className="text-center">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
