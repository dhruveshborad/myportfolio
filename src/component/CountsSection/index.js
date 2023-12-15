const Counts = () => {
  return (
    <div className="counts container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="count-box">
            <i className="bi bi-emoji-smile"></i>
            <span
              data-purecounter-start="0"
              data-purecounter-end="232"
              data-purecounter-duration="1"
              className="purecounter"
            >
              232
            </span>
            <p>Happy Clients</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
          <div className="count-box">
            <i className="bi bi-journal-richtext"></i>
            <span
              data-purecounter-start="0"
              data-purecounter-end="521"
              data-purecounter-duration="1"
              className="purecounter"
            >
              521
            </span>
            <p>Projects</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className="count-box">
            <i className="bi bi-headset"></i>
            <span
              data-purecounter-start="0"
              data-purecounter-end="1463"
              data-purecounter-duration="1"
              className="purecounter"
            >
              1463
            </span>
            <p>Hours Of Support</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className="count-box">
            <i className="bi bi-award"></i>
            <span
              data-purecounter-start="0"
              data-purecounter-end="24"
              data-purecounter-duration="1"
              className="purecounter"
            >
              24
            </span>
            <p>Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Counts;