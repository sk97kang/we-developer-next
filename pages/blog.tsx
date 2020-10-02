import { blogList } from "../common/data";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Section from "../components/Section";

function BlogPage() {
  return (
    <Layout>
      <Section id="blog" title="Blog">
        {blogList.map((blog) => (
          <Card
            key={blog.id}
            img={blog.img}
            link={blog.link}
            title={blog.title}
          />
        ))}
      </Section>
    </Layout>
  );
}

export default BlogPage;
