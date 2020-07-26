import React from 'react';

import { Container, Contact } from './styles';

const Footer: React.FC = () => (
  <Container id="Contato">
    <Contact>
      <p>AMBROSIO ARTE EM FERRO E MADEIRA.</p>
      <p>CNPJ: 36.470.520/0001-05.</p>
      <p>Telefone (WhatsApp): 67 9 9325-7520.</p>
      <p>
        <a href="mailto:ambrosio.contato@gmail.com">
          E-mail: ambrosio.contato@gmail.com.
        </a>
      </p>
      <p>
        Endereço: Rua Aniceto Arão, 290 - Jardim Santa Loudes. Três Lagoas/MS.
      </p>
    </Contact>
  </Container>
);

export default Footer;
