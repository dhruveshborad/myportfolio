import Image from "next/image";
import ThankYouImage from "../../../public/assets/thankyouImg.png";

const ThankYou = () => {
    return(
        <div id="thankYou" className="thankYou section-show">
            <Image className="ThankYouImg" src={ThankYouImage} width={500} height={500} />
        </div>
    )
};
export default ThankYou;