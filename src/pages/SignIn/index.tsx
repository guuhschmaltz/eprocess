import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>LOGO</h1>
        <h1>Faça seu logon</h1>
        <Input icon={FiMail} name="e-mail" placeholder="E-mail" />
        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Senha"
        />
        <Button type="submit">Entrar</Button>
        <Link to="/">
          <HiQuestionMarkCircle size={24} />
          Esqueci minha senha
        </Link>
      </Content>
    </Container>
  );
};

export default SignIn;
