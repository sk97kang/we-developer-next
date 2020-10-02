import React from "react";

import styled, { css } from "styled-components";

const Container = styled.div``;

const Logo = styled.div<{ hover: boolean }>`
  position: relative;
  overflow: hidden;

  & img {
    border-radius: 0.5rem;
  }

  &:hover a {
    bottom: 0;
  }

  ${({ hover }) => {
    if (hover) {
      return css`
        a {
          bottom: 0;
        }
      `;
    }
  }}
`;

const Link = styled.a`
  position: absolute;
  bottom: -100%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(20, 20, 20, 0.23);
  border-radius: 0.5rem;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: 0.3s;
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.margins.mb1};
`;

const LinkTtile = styled.div``;

type Props = {
  img: string;
  link: string;
  title: string;
};

function Card({ img, link, title }: Props) {
  if (img) {
    return (
      <Container>
        <Logo hover={false}>
          <img src={img} alt="img" />
          <Link href={link} target="_blank">
            <LinkTtile>{title}</LinkTtile>
          </Link>
        </Logo>
      </Container>
    );
  } else {
    return (
      <Container>
        <Logo hover={true}>
          <img src="./images/default.jpg" alt="img" />
          <Link href={link} target="_blank">
            <LinkTtile>{title}</LinkTtile>
          </Link>
        </Logo>
      </Container>
    );
  }
}

export default Card;
