import React from 'react';
import { Container } from './styles';

import Logo from '../../assets/logo.svg';

const Header: React.FC = () => (
  <Container>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <a href="#Suportes para Vasos">Suportes</a>
        <a href="#Itens de Decoração">Decoração</a>
        <a href="#Aparadores">Aparadores</a>
        <a>Loja</a>
      </nav>
    </header>
  </Container>
);

export default Header;
