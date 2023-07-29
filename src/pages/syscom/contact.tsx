import { Meta } from "@/layouts/Meta";
import { Main } from "@/layouts/syscom/Main";

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <p>Diese Webseite wurde von Jonas Schneider erstellt.</p>
    <p>
      Kontakt:{" "}
      <a href="jonas.max.schneider@gmail.com">jonas.max.schneider@gmail.com</a>
    </p>
  </Main>
);

export default About;
