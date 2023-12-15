import Image from "next/image";
import FourOhFourImg from "../../public/assets/404.png";
const FourOhFour = () => {
  return (
    <section id="FourOhFour" className="FourOhFour section-show">
      <div className="container">
        <Image
          className="FourOhFourImg"
          src={FourOhFourImg}
          width={1000}
          height={1000}
          alt="FourOhFourImage"
        />
      </div>
    </section>
  );
};
export default FourOhFour;
