import React from 'react';

import { Container, Image, Text } from './styles';

interface ItemProps {
  title?: string;
  text?: string;
  img: string;
}

const ItemRight: React.FC<ItemProps> = ({ title, text, img }) => (
  <>
    <span id={title} />
    <Container>
      <Text>
        <span>{title}</span>
        <p>{text}</p>
      </Text>
      <Image img={img} />
    </Container>
  </>
);

export default ItemRight;
