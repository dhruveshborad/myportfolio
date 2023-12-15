import Image from "next/image";
import ThankYouImage from "../../../public/assets/thankyouImg.png";

const ThankYou = () => {
  return (
    <section id="thankYou" className="thankYou section-show">
      <div className="container">
        <Image
          className="ThankYouImg"
          src={ThankYouImage}
          width={500}
          height={500}
          alt="ThankYouImage"
        />
      </div>
    </section>
  );
};
export default ThankYou;
