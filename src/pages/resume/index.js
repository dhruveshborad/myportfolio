import { saveAs } from "file-saver";
const downloadResume = () => {
  console.log("first");
  saveAs("./assets/Resume.pdf", "Dhruvesh Borad Resume.pdf");
};
const Resume = () => {
  return (
    <section id="resume" className="resume section-show">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>Check My Resume</p>
          <button
            type="button"
            className="btn-sm DownloadBtn"
            onClick={() => downloadResume()}
          >
            Resume <i className="bi bi-download" />
          </button>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Fullstack developer</h4>
              <p>
                With the help of Qt 5 Ui made, Login page , signup page, forgot
                password with email verification. Flexible and multitasking with
                data saving in MongoDB database, python and this UI is used to
                create an exe file used for task management system
              </p>

              <ul>
                <li>VOCADORS TECHNOLOGIES PVT LTD</li>
                {/* <li>(123) 456-7891</li> */}
                <li>JALPESHPANCHAL71@GMAIL.COM</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>S.S.C. &amp; High School</h4>
              <h5>2017 - 2018</h5>
              <p>Aashadeep vidhyalaya-2, Surat, Guj</p>
              {/* <p>
                Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam
                iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti
                nerada porti sand markend
              </p> */}
            </div>
            <div className="resume-item">
              <h4>H.S.C &amp; High School</h4>
              <h5>2018 - 2020</h5>
              <p>Ashadeep IIT, Surat, Guj</p>
              {/* <p>
                Quia nobis sequi est occaecati aut. Repudiandae et iusto quae
                reiciendis et quis Eius vel ratione eius unde vitae rerum
                voluptates asperiores voluptatem Earum molestiae consequatur
                neque etlon sader mart dila
              </p> */}
            </div>
            {/* <div className="DownloadBtn">
              
            </div> */}
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Full-Stack Developer</h4>
              <h5>2024 - Present</h5>
              <p>
                <em>Accomation, Ahmadabad, Guj </em>
              </p>
              <ul>
                <li>
                  Coming Soon...
                  {/* Lead in the design, development, and implementation of the
                  graphic, layout, and production communication materials */}
                </li>
                {/* <li>
                  Delegate tasks to the 7 members of the design team and provide
                  counsel on all aspects of the project.{" "}
                </li>
                <li>
                  Supervise the assessment of all graphic materials in order to
                  ensure quality and accuracy of the design
                </li>
                <li>
                  Oversee the efficient use of production project budgets
                  ranging from $2,000 - $25,000
                </li> */}
              </ul>
            </div>
            <div className="resume-item">
              <h4>Front-end Developer</h4>
              <h5>2021 - 2023</h5>
              <p>
                <em>Codage Habitation, Ahmadabad, Guj </em>
              </p>

              <ul>
                <li>
                  I have 1.5+ year of experience at Codage Habitation. During my
                  tenure, I handled numerous front-end projects where I
                  maintained code quality and ensured the development of
                  responsive websites.
                </li>
                <li>
                  The majority of my frontend work revolved around JavaScript
                  and its frameworks and library, including ReactJS, NextJS,
                  Redux, VueJS, Material UI (UI), and Highcharts (data
                  visualization). Additionally, I managed backend tasks, working
                  with CMS platforms such as Storyblok and Sanity.
                </li>
                <li>
                  I successfully managed projects on version control platforms
                  like GitHub, Bitbucket, and Git. Communication was facilitated
                  through Slack, Asana, and Zoom for video calls. I actively
                  participated in close teamwork and even took on a leadership
                  role within the team.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
