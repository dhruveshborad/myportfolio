import Image from "next/image";
import Carousel from "react-multi-carousel";

import testimonials1 from "../../../public/assets/testimonials/testimonials-1.jpg";
import testimonials2 from "../../../public/assets/testimonials/testimonials-2.jpg";
import testimonials3 from "../../../public/assets/testimonials/testimonials-3.jpg";
import testimonials4 from "../../../public/assets/testimonials/testimonials-4.jpg";
import testimonials5 from "../../../public/assets/testimonials/testimonials-5.jpg";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const Testimonial = () => {
  return (
    <div className="testimonials container">
      <div className="section-title">
        <h2>Testimonials</h2>
      </div>
      <div
        className="testimonials-slider"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="testimonial-item">
            <p>
              <img
                className="quote-icon-left"
                width="26"
                height="26"
                src="https://img.icons8.com/fluency-systems-filled/26/18d26e/quote-left.png"
                alt="quote-left"
              />
              Proin iaculis purus consequat sem cure digni ssim donec porttitora
              entum suscipit rhoncus. Accusantium quam, ultricies eget id,
              aliquam eget nibh et. Maecen aliquam, risus at semper.
              <img
                className="quote-icon-left"
                width="26"
                height="26"
                src="https://img.icons8.com/fluency-systems-filled/26/18d26e/quote-right.png"
                alt="quote-right"
              />
            </p>
            <Image
              height={90}
              src={testimonials1}
              className="testimonial-img"
              alt="testimonials1"
            />
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
          </div>
          <div className="testimonial-item">
            <p>
              <img
                className="quote-icon-left"
                width="26"
                height="26"
                src="https://img.icons8.com/fluency-systems-filled/26/18d26e/quote-left.png"
                alt="quote-left"
              />
              Export tempor illum tamen malis malis eram quae irure esse labore
              quem cillum quid cillum eram malis quorum velit fore eram velit
              sunt aliqua noster fugiat irure amet legam anim culpa.
              <img
                className="quote-icon-left"
                width="26"
                height="26"
                src="https://img.icons8.com/fluency-systems-filled/26/18d26e/quote-right.png"
                alt="quote-right"
              />
            </p>
            <Image
              src={testimonials2}
              className="testimonial-img"
              alt=""
              height={90}
            />
            <h3>Sara Wilsson</h3>
            <h4>Designer</h4>
          </div>
          <div className="testimonial-item">
            <p>
              <img
                className="quote-icon-left"
                width="26"
                height="26"
                src="https://img.icons8.com/fluency-systems-filled/26/18d26e/quote-left.png"
                alt="quote-left"
              />
              Enim nisi quem export duis labore cillum quae magna enim sint
              quorum nulla quem veniam duis minim tempor labore quem eram duis
              noster aute amet eram fore quis sint minim.
              <img
                className="quote-icon-left"
                width="26"
                height="26"
                src="https://img.icons8.com/fluency-systems-filled/26/18d26e/quote-right.png"
                alt="quote-right"
              />
            </p>
            <Image
              src={testimonials3}
              className="testimonial-img"
              alt=""
              height={90}
            />
            <h3>Jena Karlis</h3>
            <h4>Store Owner</h4>
          </div>
          <div className="testimonial-item">
            <p>
              <img
                className="quote-icon-left"
                width="26"
                height="26"
                src="https://img.icons8.com/fluency-systems-filled/26/18d26e/quote-left.png"
                alt="quote-left"
              />
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos
              export minim fugiat minim velit minim dolor enim duis veniam ipsum
              anim magna sunt elit fore quem dolore labore illum veniam.
              <img
                className="quote-icon-left"
                width="26"
                height="26"
                src="https://img.icons8.com/fluency-systems-filled/26/18d26e/quote-right.png"
                alt="quote-right"
              />
            </p>
            <Image
              src={testimonials4}
              className="testimonial-img"
              alt=""
              height={90}
            />
            <h3>Matt Brandon</h3>
            <h4>Freelancer</h4>
          </div>
          <div className="testimonial-item">
            <p>
              <img
                className="quote-icon-left"
                width="26"
                height="26"
                src="https://img.icons8.com/fluency-systems-filled/26/18d26e/quote-left.png"
                alt="quote-left"
              />
              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
              veniam tempor noster veniam enim culpa labore duis sunt culpa
              nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum
              quid.
              <img
                className="quote-icon-left"
                width="26"
                height="26"
                src="https://img.icons8.com/fluency-systems-filled/26/18d26e/quote-right.png"
                alt="quote-right"
              />
            </p>
            <Image
              src={testimonials5}
              className="testimonial-img"
              alt=""
              height={90}
            />
            <h3>John Larson</h3>
            <h4>Entrepreneur</h4>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default Testimonial;
