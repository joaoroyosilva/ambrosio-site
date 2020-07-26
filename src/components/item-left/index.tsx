import React from 'react';

import { Container, Image, Text } from './styles';

interface ItemProps {
  title?: string;
  text?: string;
  img: string;
}

const ItemLeft: React.FC<ItemProps> = ({ title, text, img }) => {
  return (
    <>
      <span id={title} />
      <Container>
        <Image img={img} />
        <Text>
          <span>{title}</span>
          <p>{text}</p>
        </Text>
      </Container>
    </>
  );
};

export default ItemLeft;
