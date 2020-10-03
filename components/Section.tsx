import React, { ReactNode } from "react";

import styled, { css } from "styled-components";
import commonStyle from "../styles/commonStyle";

import More from "./More";

const Container = styled.section<{ styleName: string }>`
  padding: 0 0 4rem 0;

  ${({ styleName }) => {
    if (styleName === "home") {
      return css`
        position: relative;
        overflow: hidden;
        background: url("./images/home_bg.jpg");
        background-size: cover;
        background-position: center center;
      `;
    }
  }}
`;

const Title = styled.h2`
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.h2};
  color: ${({ theme }) => theme.colors.dark};
  margin: ${({ theme }) => theme.margins.mb4} 0;
  text-align: center;

  &::after {
    position: absolute;
    content: "";
    width: 32px;
    height: 0.18rem;
    left: 0;
    right: 0;
    margin: auto;
    top: 2rem;
    background-color: ${({ theme }) => theme.colors.first};
  }

  @media (min-width: 768px) {
    margin-bottom: 3rem;

    &::after {
      width: 64px;
      top: 3rem;
    }
  }
`;

const Content = styled.div`
  ${commonStyle.grid};

  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 896px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

type Props = {
  id: string;
  title?: string;
  children: ReactNode;
  isMore?: boolean;
};

function Section({ id, title, children, isMore }: Props) {
  return (
    <Container id={id} styleName={id}>
      {title && <Title>{title}</Title>}
      <Content>{children}</Content>
      {isMore && <More link={id} />}
    </Container>
  );
}

export default Section;
