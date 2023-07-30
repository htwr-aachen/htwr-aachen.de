import Main from "@/layouts/Main";
import { Meta } from "@/layouts/Meta";

const About = () => (
  <Main
    meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}
    institute="syscom"
  >
    <p>Diese Webseite wurde von Jonas Schneider erstellt.</p>
    <p>
      Kontakt:{" "}
      <a href="jonas.max.schneider@gmail.com">jonas.max.schneider@gmail.com</a>
    </p>
  </Main>
);

export default About;
