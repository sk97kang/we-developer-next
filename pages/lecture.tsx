import { bootCampList, lectureList } from "../common/data";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Section from "../components/Section";

function LecturePage() {
  return (
    <Layout>
      <Section id="lecture" title="Lecture">
        {lectureList.map((lecture) => (
          <Card
            key={lecture.id}
            img={lecture.img}
            link={lecture.link}
            title={lecture.title}
          />
        ))}
        {bootCampList.map((bootCamp) => (
          <Card
            key={bootCamp.id}
            img={bootCamp.img}
            link={bootCamp.link}
            title={bootCamp.title}
          />
        ))}
      </Section>
    </Layout>
  );
}

export default LecturePage;
