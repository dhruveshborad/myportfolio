import Counts from "@/component/CountsSection";
import Intrusts from "@/component/IntrustsSection";
import MoreAbout from "@/component/MoreAboutSection";
import Skills from "@/component/SkillSection";
import Testimonial from "@/component/testimonial";

const About = () => {
  return (
    <section id="about" className="about section-show">
      <MoreAbout />
      <Counts />
      <Skills />
      <Intrusts />
      <Testimonial />
    </section>
  );
};
export default About;
