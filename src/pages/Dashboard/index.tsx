import React from 'react';
import { MdLiveTv } from 'react-icons/md';

import { Container, Content, Background, Form, SummonerInfo } from './styles';

import logo from '../../assets/logo.svg';
import icone from '../../assets/iconeInvocador.jpg';
import roleTop from '../../assets/roles/Position_Silver-Top.png';

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <img src={logo} alt="GG.WP" />
          <Form>
            <input type="text" placeholder="Informe o nome de invocador" />
            <button type="submit">Pesquisar</button>
          </Form>

          <SummonerInfo>
            <a href="teste">
              <img src={icone} alt="icone" />
              <div>
                <strong>yHurry</strong>
                <section>
                  <p>Posição atual:</p>
                  <img src={roleTop} alt="" />
                </section>
              </div>

              <MdLiveTv size={25} title="Em partida" />
            </a>
          </SummonerInfo>
        </Content>
        <Background />
      </Container>
    </>
  );
};

export default Dashboard;
