const Counts = () => {
  return (
    <div className="counts container">
      <div className="countsDetails">
        <div className="col-lg-3 col-md-6">
          <div className="count-box">
            <img
              width="26"
              height="26"
              src="https://img.icons8.com/metro/26/18d26e/happy.png"
              alt="happy"
            />
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
            <img
              width="26"
              height="26"
              src="https://img.icons8.com/ios/50/18d26e/test-passed--v1.png"
              alt="test-passed--v1"
            />
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
            <img
              width="26"
              height="26"
              src="https://img.icons8.com/material-outlined/50/18d26e/online-support.png"
              alt="online-support"
            />
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
            <img
              width="26"
              height="26"
              src="https://img.icons8.com/windows/50/18d26e/winners-medal.png"
              alt="winners-medal"
            />
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
