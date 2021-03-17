import React, { useCallback, useRef } from 'react';
import { FiMail, FiArrowLeftCircle } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { AnimationContainer, Container, Content, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

import ImgLogo from '../../components/ImgLogo';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const haveAnyCode = useCallback(() => {
    history.push('/reset-password');
  }, [history]);

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // criar funcao assincrona
        // chamar na api
        // enviar email de recuperacao
        // criar animacao enquanto envia o email
        // redirecionar pro reset
        history.push('/reset-password');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [formRef, history],
  );
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <ImgLogo />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Recupere sua senha</h1>
            <Input icon={FiMail} name="email" placeholder="E-mail" />
            <Button type="submit">Enviar código</Button>
            <Button onClick={haveAnyCode}>Já tenho um código</Button>
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
