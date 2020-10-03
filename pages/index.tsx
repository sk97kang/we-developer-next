import { GetStaticProps } from "next";
import {
  lectureList,
  blogList,
  communityList,
  youtubeList,
} from "../common/data";

import Home from "../components/Home";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Card from "../components/Card";

const IndexPage = () => {
  const shortLectureList =
    lectureList.length > 8 ? lectureList.slice(0, 8) : lectureList;
  const shortBlogList = blogList.length > 8 ? blogList.slice(0, 8) : blogList;
  const shortCommunityList =
    communityList.length > 8 ? communityList.slice(0, 8) : communityList;
  const shortYoutubeList =
    youtubeList.length > 8 ? youtubeList.slice(0, 8) : youtubeList;

  return (
    <Layout>
      <Home />
      <Section id="lecture" title="Lecture" isMore={true}>
        {shortLectureList.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            url={item.url}
            image={item.image}
            site_name={item.site_name}
            description={item.description}
          />
        ))}
      </Section>
      <Section id="blog" title="Blog" isMore={true}>
        {shortBlogList.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            url={item.url}
            image={item.image}
            site_name={item.site_name}
            description={item.description}
          />
        ))}
      </Section>
      <Section id="youtube" title="Youtube" isMore={true}>
        {shortYoutubeList.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            url={item.url}
            image={item.image}
            site_name={item.site_name}
            description={item.description}
          />
        ))}
      </Section>
      <Section id="community" title="Community" isMore={true}>
        {shortCommunityList.map((item) => (
          <Card
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
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default IndexPage;
