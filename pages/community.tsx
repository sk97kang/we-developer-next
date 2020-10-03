import { GetStaticProps } from "next";
import { communityList } from "../common/data";

import CardDetail from "../components/CardDetail";
import Layout from "../components/Layout";
import Section from "../components/Section";

function CommunityPage() {
  return (
    <Layout>
      <Section id="community" title="Community">
        {communityList.map((item) => (
          <CardDetail
            key={item.id}
            title={item.title}
            url={item.url}
            image={item.image}
            site_name={item.site_name}
            description={item.description}
          />
        ))}
      </Section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default CommunityPage;
