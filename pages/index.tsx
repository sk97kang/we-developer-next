import { GetStaticProps } from "next";
import {
  lectureList,
  blogList,
  communityList,
  youtubeList,
  dataType,
} from "../common/data";

import Home from "../components/Home";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Card from "../components/Card";

const IndexPage = () => {
  const getShortList = (list: dataType[]) => {
    return list.length > 8 ? list.slice(0, 8) : list;
  };

  const shortLectureList = getShortList(lectureList);
  const shortBlogList = getShortList(blogList);
  const shortCommunityList = getShortList(communityList);
  const shortYoutubeList = getShortList(youtubeList);

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
