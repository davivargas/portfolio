import { SectionHeading } from "../SectionHeading";

export const About = () => {
  return (
    <section id="about" className="scroll-mt-24 py-16 lg:py-24">
      <SectionHeading eyebrow="01 / About" title="A bit about me" />

      <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
        <p>
          I'm a software developer based in <span className="text-foreground">
          Vancouver, BC</span>. I first got into coding during my <span className="text-foreground">Mechanical Engineering</span> degree in 
          Brazil, then kept using it to automate whatever I could at work. Somewhere along the way, I realized 
          I wanted to do this for a living, and my <span className="text-foreground">two internship experiences</span> made that feel even more right.
        </p>
        <p>
          Right now, I'm constantly looking for problems I can solve with code, building personal projects, 
          learning new technologies, and leveraging AI tools to move faster from an idea to something 
          useful.
        </p>
        <p>
          When I'm not at the keyboard, you'll probably find me spending quality time with my family, snowboarding or hiking around 
          British Columbia.
        </p>
        {/* <p>
          I'm a software engineer based in <span className="text-foreground">Brooklyn, NY</span>. I
          started writing code in high school to mod video games, and somewhere along the way it
          turned into a career.
        </p>
        <p>
          These days I focus on the seams between design and engineering — design systems,
          animation, performance, and the small interactions that make a product feel alive. I care
          a lot about <span className="text-foreground">accessibility</span>,{" "}
          <span className="text-foreground">typography</span>, and the discipline of shipping.
        </p>
        <p>
          When I'm not at the keyboard you'll probably find me on a long bike ride, brewing
          pour-over, or losing at chess online.
        </p> */}
      </div>
    </section>
  );
};
