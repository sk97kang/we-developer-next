import React from "react";
import Link from "next/link";
import styled from "styled-components";
import commonStyle from "../styles/commonStyle";

const FooterContainer = styled.footer`
  ${commonStyle.section}

  background-color: ${({ theme }) => theme.colors.dark};
`;

const Container = styled.div`
  ${commonStyle.grid}

  row-gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.normal};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.margins.mb2}; ;
`;

const Item = styled.li`
  margin-bottom: ${({ theme }) => theme.margins.mb1};
`;

const TargetLink = styled.a`
  padding: 0.25rem 0;

  &:hover {
    color: ${({ theme }) => theme.colors.first};
  }
`;

const Social = styled.a`
  font-size: 1.4rem;
  margin-right: ${({ theme }) => theme.margins.mb1};
  &:hover {
    color: ${({ theme }) => theme.colors.first};
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <div className="footer__data">
          <Title>We Developer</Title>
          <p className="footer__text">개발자를 위한 자료 공유 사이트</p>
        </div>

        <div className="footer__data">
          <Title>EXPLORE</Title>
          <ul>
            <Item>
              <Link href="/">
                <TargetLink>Home</TargetLink>
              </Link>
            </Item>
            <Item>
              <Link href="/lecture">
                <TargetLink>강의</TargetLink>
              </Link>
            </Item>
            <Item>
              <Link href="/blog">
                <TargetLink>블로그</TargetLink>
              </Link>
            </Item>
            <Item>
              <Link href="/youtube">
                <TargetLink>유튜브</TargetLink>
              </Link>
            </Item>
            <Item>
              <Link href="/community">
                <TargetLink>커뮤니티</TargetLink>
              </Link>
            </Item>
          </ul>
        </div>

        <div className="footer__data">
          <Title>FOLLOW</Title>
          <Social href="https://github.com/sk97kang" target="_blank">
            <i className="bx bxl-github"></i>
          </Social>
        </div>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
