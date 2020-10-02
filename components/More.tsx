import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MoreButton = styled.a`
  margin: ${({ theme }) => theme.margins.mb4};
  color: ${({ theme }) => theme.colors.link};
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

type Props = {
  link: string;
};

function More({ link }: Props) {
  return (
    <Container>
      <MoreButton href={link}>View More</MoreButton>
    </Container>
  );
}

export default More;
