import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { AnimationContainer, Container, Content, Background } from './styles';

import ImgLogo from '../../components/ImgLogo';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <ImgLogo />
          <Form onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>
            <Input icon={FiMail} name="e-mail" placeholder="E-mail" />
            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Entrar</Button>
            <Link to="/forgot-password">
              Esqueceu sua senha
              <HiQuestionMarkCircle size={24} />
            </Link>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignIn;
