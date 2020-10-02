import { communityList } from "../common/data";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Section from "../components/Section";

function CommunityPage() {
  return (
    <Layout>
      <Section id="community" title="Community">
        {communityList.map((community) => (
          <Card
            key={community.id}
            img={community.img}
            link={community.link}
            title={community.title}
          />
        ))}
      </Section>
    </Layout>
  );
}

export default CommunityPage;
