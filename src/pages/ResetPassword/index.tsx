import React from 'react';
import { FiArrowLeftCircle, FiInfo, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { AnimationContainer, Container, Content } from './styles';

import ImgLogo from '../../components/ImgLogo';
import Input from '../../components/Input';
import Button from '../../components/Button';

const ResetPassword: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <ImgLogo />
          <Form onSubmit={handleSubmit}>
            <h1>Redefina sua senha</h1>
            <Input icon={FiInfo} name="codigo" placeholder="Código" />
            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha"
            />
            <Input
              icon={FiLock}
              name="confirm-password"
              type="password"
              placeholder="Confirmar Senha"
            />
            <Button type="submit">Redefinir Senha</Button>
            <Link to="/forgot-password">
              Voltar para recuperar senha
              <FiArrowLeftCircle size={24} />
            </Link>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default ResetPassword;
