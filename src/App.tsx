import React from 'react';

import GlobalStyle, { Container } from './styles/global';

import Header from './components/header';
import ItemLeft from './components/item-left';
import ItemRight from './components/item-right';
import Footer from './components/footer';

import Coruja from './assets/suporte_coruja_sem_vaso.jpg';
import Fruteira from './assets/fruteira.jpg';

interface Item {
  title: string;
  text: string;
}

const App: React.FC = () => {
  const suporte: Item = {
    title: 'Suportes para Vasos',
    text:
      'Suportes para vasos decorativos de ótima qualidade e resistência totalmente artesanais.',
  };

  const decoracao: Item = {
    title: 'Itens de Decoração',
    text: 'Itens de decoração feitos à mão para decorar sua casa.',
  };

  const aparadores: Item = {
    title: 'Aparadores',
    text: 'Aparadores únicos feitos à mão de diversos modelos.',
  };

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <ItemLeft text={suporte.text} title={suporte.title} img={Coruja} />
      <ItemRight text={decoracao.text} title={decoracao.title} img={Fruteira} />
      <ItemLeft text={aparadores.text} title={aparadores.title} img={Coruja} />
      <Footer />
    </Container>
  );
};

export default App;
