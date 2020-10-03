import React, { useState } from "react";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const Img = styled.img`
  height: 150px;
  margin-bottom: ${({ theme }) => theme.margins.mb1};
`;

const Body = styled.div`
  padding: ${({ theme }) => theme.paddings.pd2};
`;

const Title = styled.div`
  margin-bottom: ${({ theme }) => theme.margins.mb2};
  font-weight: 600;
`;

const Description = styled.div`
  font-size: 12px;
`;

const Link = styled.a``;

const ImageContainer = styled.div`
  position: relative;
`;

const ImageTitle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(20, 20, 20, 0.23);
  border-radius: 0.5rem;
  backdrop-filter: blur(10px);
  transition: 0.3s;
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.margins.mb1};
`;

type Props = {
  title: string;
  url: string;
  image: string;
  site_name: string;
  description: string;
};

function CardDetail({ title, url, image, description }: Props) {
  const [imageSrc, setImageSrc] = useState(image);

  const onError = () => {
    setImageSrc("");
  };

  return (
    <Link href={url} target="_blacnk">
      <Container>
        {imageSrc ? (
          <Img src={imageSrc} onError={onError} />
        ) : (
          <ImageContainer>
            <Img src={"./images/default.jpg"} onError={onError} />
            <ImageTitle>{title}</ImageTitle>
          </ImageContainer>
        )}

        <Body>
          <Title>{title}</Title>
          <Description>
            {description.length > 80
              ? `${description.slice(0, 80)}...`
              : description}
          </Description>
        </Body>
      </Container>
    </Link>
  );
}

export default CardDetail;
