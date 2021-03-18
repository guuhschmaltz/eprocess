import React, { useCallback, useRef } from 'react';
import { FiArrowLeftCircle, FiInfo, FiLock } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { AnimationContainer, Container, Content, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

import ImgLogo from '../../components/ImgLogo';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface ResetPasswordFormData {
  codigo: string;
  password: string;
  confirmPassword: string;
}

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          code: Yup.string()
            .trim('Campo vazio')
            .required('Código de recuperação obrigatório'),
          password: Yup.string()
            .required('Senha obrigatória')
            .min(6, 'Mínimo de 6 dígitos'),
          passwordConfirmation: Yup.string()
            .required('Confirme sua senha')
            .oneOf([Yup.ref('password')], 'Senhas não coincidem'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // criar funcao assincrona
        // chamar na api
        // enviar solicitacao de alteracao de senha
        // criar animacao quando bem sucedido
        // redirecionar pro login
        history.push('/');
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
          <Form ref={formRef} onSubmit={handleSubmit}>
          <ImgLogo />
            <h1>Redefina sua senha</h1>
            <Input icon={FiInfo} name="code" placeholder="Código" />
            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha"
            />
            <Input
              icon={FiLock}
              name="passwordConfirmation"
              type="password"
              placeholder="Confirmar Senha"
            />
            <Button type="submit">Redefinir Senha</Button>
            <Link to="/forgot-password">
              Voltar para recuperar senha
              <FiArrowLeftCircle size={20} />
            </Link>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default ResetPassword;
