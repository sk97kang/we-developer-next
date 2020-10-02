import React from "react";
import Section from "./Section";

import styled from "styled-components";
import commonStyle from "../styles/commonStyle";

const Container = styled.div`
  ${commonStyle.grid}

  height: calc(100vh - ${({ theme }) => theme.heights.header});
`;

const Title = styled.h1`
  justify-self: center;
  align-self: center;
  font-size: ${({ theme }) => theme.fontSizes.big};
  color: ${({ theme }) => theme.colors.white};

  & span {
    text-shadow: 0 20px 25px rgba(0, 0, 0, 0.5);
  }
`;

function Home() {
  return (
    <Section id="home">
      <Container>
        <Title>
          Hellow! <span>We Developer</span>
        </Title>
      </Container>
    </Section>
  );
}

export default Home;
