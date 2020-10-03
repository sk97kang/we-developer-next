import { GetStaticProps } from "next";
import { blogList } from "../common/data";

import CardDetail from "../components/CardDetail";
import Layout from "../components/Layout";
import Section from "../components/Section";

function BlogPage() {
  return (
    <Layout>
      <Section id="blog" title="Blog">
        {blogList.map((item) => (
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

export default BlogPage;
