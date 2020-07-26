import React from 'react';

import { Container, Image, Text } from './styles';

interface ItemProps {
  title?: string;
  text?: string;
  img: string;
}

const ItemRight: React.FC<ItemProps> = ({ title, text, img }) => (
  <Container id={title}>
    <Text>
      <span>{title}</span>
      <p>{text}</p>
    </Text>
    <Image img={img} />
  </Container>
);

export default ItemRight;
