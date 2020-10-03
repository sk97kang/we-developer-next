import { GetStaticProps } from "next";
import { youtubeList } from "../common/data";

import CardDetail from "../components/CardDetail";
import Layout from "../components/Layout";
import Section from "../components/Section";

function YoutubePage() {
  return (
    <Layout>
      <Section id="youtube" title="Youtube">
        {youtubeList.map((item) => (
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

export default YoutubePage;
