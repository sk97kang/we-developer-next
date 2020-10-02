import Home from "../components/Home";
import Layout from "../components/Layout";
import Section from "../components/Section";
import {
  lectureList,
  blogList,
  communityList,
  youtubeList,
} from "../common/data";
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
      <Section id="lecture" title="Lecture" isMore={lectureList.length > 8}>
        {shortLectureList.map((lecture) => (
          <Card
            key={lecture.id}
            img={lecture.img}
            link={lecture.link}
            title={lecture.title}
          />
        ))}
      </Section>
      <Section id="blog" title="Blog" isMore={blogList.length > 8}>
        {shortBlogList.map((blog) => (
          <Card
            key={blog.id}
            img={blog.img}
            link={blog.link}
            title={blog.title}
          />
        ))}
      </Section>
      <Section id="youtube" title="Youtube" isMore={youtubeList.length > 8}>
        {shortYoutubeList.map((youtube) => (
          <Card
            key={youtube.id}
            img={youtube.img}
            link={youtube.link}
            title={youtube.title}
          />
        ))}
      </Section>
      <Section
        id="community"
        title="Community"
        isMore={communityList.length > 8}
      >
        {shortCommunityList.map((community) => (
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
};

export default IndexPage;
