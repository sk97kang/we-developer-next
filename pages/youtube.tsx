import { youtubeList } from "../common/data";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Section from "../components/Section";

function YoutubePage() {
  return (
    <Layout>
      <Section id="youtube" title="Youtube">
        {youtubeList.map((youtube) => (
          <Card
            key={youtube.id}
            img={youtube.img}
            link={youtube.link}
            title={youtube.title}
          />
        ))}
      </Section>
    </Layout>
  );
}

export default YoutubePage;
