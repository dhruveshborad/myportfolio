import Image from "next/image";
import myPhoto from "../../../public/assets/photo.jpg";
const MoreAbout = () => {
  return (
    <div className="aboutMe container">
      <div className="sectionTitle">
        <h2>About</h2>
        <p>Learn more about me</p>
      </div>
      <div className="myDetails">
        <div className="col-lg-4" data-aos="fade-right">
          <Image src={myPhoto} className="img-fluid" alt="" width={300} />
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>FrontEnd Developer</h3>
          <p className="fst-italic">
            A front-end developer builds the front-end portion of websites and
            web applications—the part users see and interact with.
          </p>
          <div className=" row">
            <div className="col-lg-6">
              <ul>
                <li>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-filled/50/18d26e/forward--v1.png"
                    alt="forward--v1"
                  />{" "}
                  <strong>Birthday:</strong> <span>23 Feb 2003</span>
                </li>
                <li>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-filled/50/18d26e/forward--v1.png"
                    alt="forward--v1"
                  />{" "}
                  <strong>Website:</strong> <span>coming soon...</span>
                </li>
                <li>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-filled/50/18d26e/forward--v1.png"
                    alt="forward--v1"
                  />{" "}
                  <strong>Phone:</strong> <span>+91 7698342723</span>
                </li>
                <li>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-filled/50/18d26e/forward--v1.png"
                    alt="forward--v1"
                  />{" "}
                  <strong>City:</strong> <span>Gujarat, India</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-filled/50/18d26e/forward--v1.png"
                    alt="forward--v1"
                  />{" "}
                  <strong>Age:</strong> <span>21</span>
                </li>
                <li>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-filled/50/18d26e/forward--v1.png"
                    alt="forward--v1"
                  />{" "}
                  <strong>Degree:</strong> <span>B.Tech</span>
                </li>
                <li>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-filled/50/18d26e/forward--v1.png"
                    alt="forward--v1"
                  />{" "}
                  <strong>Email:</strong>{" "}
                  <span>dhruveshborad007@gmail.com</span>
                </li>
                <li>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-filled/50/18d26e/forward--v1.png"
                    alt="forward--v1"
                  />{" "}
                  <strong>Freelance:</strong> <span>Available</span>
                </li>
              </ul>
            </div>
          </div>
          <p>
            As a Computer Engineer, I prioritize staying informed and
            continually expanding my knowledge to ensure success in my field. My
            academic background and practical experience serve as the foundation
            for adapting to the dynamic nature of technology, allowing me to
            contribute effectively to the ever-evolving landscape of computer
            engineering.
          </p>
        </div>
      </div>
    </div>
  );
};
export default MoreAbout;
