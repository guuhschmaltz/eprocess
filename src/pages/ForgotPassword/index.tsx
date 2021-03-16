import React from 'react';
import { FiMail, FiArrowLeftCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { AnimationContainer, Container, Content } from './styles';

import ImgLogo from '../../components/ImgLogo';
import Input from '../../components/Input';
import Button from '../../components/Button';

const ForgotPassword: React.FC = () => {
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <ImgLogo />
          <form>
            <h1>Recupere sua senha</h1>
            <Input icon={FiMail} name="e-mail" placeholder="E-mail" />
            <Button type="submit">Enviar código</Button>
            <Button>Já tenho um código</Button>
            <Link to="/">
              Voltar para login
              <FiArrowLeftCircle size={24} />
            </Link>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default ForgotPassword;
