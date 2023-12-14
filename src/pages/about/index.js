import Counts from "@/component/CountsSection";
import Intrusts from "@/component/CountsSection/IntrustsSection";
import MoreAbout from "@/component/MoreAboutSection";
import Skills from "@/component/SkillSection";
import Testimonial from "@/component/testimonial";

const About = () => {
  return (
    <section id="about" className="about">
      <MoreAbout />
      <Counts />
      <Skills />
      <Intrusts />
      <Testimonial />
    </section>
  );
};
export default About;
