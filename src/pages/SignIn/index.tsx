import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { AnimationContainer, Container, Content } from './styles';

import ImgLogo from '../../components/ImgLogo';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <ImgLogo />
          <form>
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
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignIn;
