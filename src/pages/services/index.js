const Services = () => {
  return (
    <section id="services" className="services section-show">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>My Services</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-dribbble"></i>
              </div>
              <h4>
                <a href="">Web Application Development</a>
              </h4>
              <p>
                A web application (web app) is an application program that is
                stored on a remote server and delivered over the internet
                through a browser interface. Web services are web apps by
                definition and many, although not all, websites contain web
                apps.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-file-slides"></i>
              </div>
              <h4>
                <a href="">Website</a>
              </h4>
              <p>
                A website is a collection of many web pages, which are digital
                files written using HTML(HyperText Markup Language). To make
                your website available to every person in the world.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-speedometer"></i>
              </div>
              <h4>
                <a href="">page Speed</a>
              </h4>
              <p>
                PageSpeed Insights (PSI) reports on the user experience of a
                page on both mobile and desktop devices and provides suggestions
                on how that page may be improved.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-globe"></i>
              </div>
              <h4>
                <a href="">SEO</a>
              </h4>
              <p>
                the process of improving your website to increase its visibility
                in Google, Microsoft Bing, and other search engines whenever
                people search for it.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-file"></i>
              </div>
              <h4>
                <a href="">Responsive Web Design</a>
              </h4>
              <p>
                Responsive Web Design is about using HTML and CSS to
                automatically resize, hide, shrink, or enlarge, a website, to
                make it look good on all devices (desktops, tablets, and
                phones):
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-box"></i>
              </div>
              <h4>
                <a href="">Handless CMS</a>
              </h4>
              <p>
                A headless CMS is a content management system that separates the
                presentation layer (where content is presented) from the backend
                (where content is managed). A headless CMS allows you to manage
                content in one place and be able to deploy that content on any
                digital channel you choose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
