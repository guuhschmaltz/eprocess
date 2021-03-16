import React from 'react';
import { FiMail, FiArrowLeftCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { AnimationContainer, Container, Content } from './styles';

import ImgLogo from '../../components/ImgLogo';
import Input from '../../components/Input';
import Button from '../../components/Button';

const ForgotPassword: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <ImgLogo />
          <Form onSubmit={handleSubmit}>
            <h1>Recupere sua senha</h1>
            <Input icon={FiMail} name="e-mail" placeholder="E-mail" />
            <Button type="submit">Enviar código</Button>
            <Button>Já tenho um código</Button>
            <Link to="/">
              Voltar para login
              <FiArrowLeftCircle size={24} />
            </Link>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default ForgotPassword;
