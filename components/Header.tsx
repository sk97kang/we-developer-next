import React, { useCallback, useState } from "react";
import Link from "next/link";

import styled, { css } from "styled-components";
import commonStyle from "../styles/commonStyle";

const Container = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zFixed};
  background: ${({ theme }) => theme.colors.black};
`;

const Nav = styled.nav`
  ${commonStyle.grid}

  height: ${({ theme }) => theme.heights.header};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    height: calc((${({ theme }) => theme.heights.header}) + 1rem);
  }
`;

const Menu = styled.div<{ show: boolean }>`
  @media (max-width: 768px) {
    position: fixed;
    top: ${({ theme }) => theme.heights.header};
    right: -100%;
    width: 80%;
    height: 100%;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.3);
    transition: 0.5s;
    backdrop-filter: blur(10px);

    ${({ show }) => {
      if (show) {
        return css`
          right: 0;
        `;
      }
    }}
  }
`;

const List = styled.ul`
  @media (min-width: 768px) {
    display: flex;
  }
`;

const Item = styled.li`
  margin-bottom: ${({ theme }) => theme.margins.mb4};

  @media (min-width: 768px) {
    margin-left: ${({ theme }) => theme.margins.mb4};
    margin-bottom: 0;
  }
`;

const TargetLink = styled.a`
  transition: 0.5s;
  position: relative;
  color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.first};
  }

  @media (min-width: 768px) {
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      color: ${({ theme }) => theme.colors.first};
    }
  }
`;

const Logo = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
`;

const Toggle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    setShowMenu((prev) => !prev);
  }, []);

  return (
    <Container>
      <Nav>
        <div>
          <Link href="/">
            <Logo href="#">We D.</Logo>
          </Link>
        </div>

        <Menu show={showMenu}>
          <List>
            <Item>
              <Link href="/">
                <TargetLink onClick={toggleMenu}>Home</TargetLink>
              </Link>
            </Item>
            <Item>
              <Link href="/lecture">
                <TargetLink onClick={toggleMenu}>강의</TargetLink>
              </Link>
            </Item>
            <Item>
              <Link href="/blog">
                <TargetLink onClick={toggleMenu}>블로그</TargetLink>
              </Link>
            </Item>
            <Item>
              <Link href="/youtube">
                <TargetLink onClick={toggleMenu}>유튜브</TargetLink>
              </Link>
            </Item>
            <Item>
              <Link href="/community">
                <TargetLink onClick={toggleMenu}>커뮤니티</TargetLink>
              </Link>
            </Item>
          </List>
        </Menu>

        <Toggle onClick={toggleMenu}>
          <i className="bx bx-menu"></i>
        </Toggle>
      </Nav>
    </Container>
  );
}

export default Header;
