import { Button, TextField } from '@mui/material'
import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormShema } from '../../../utils/validations';
import { FormField } from '../../FormField';

interface LoginFormProps {
  onOpenRegister: () => void;
}

interface IFormInputs {
  email: string;
  password: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  const form = useForm<IFormInputs>({
    resolver: yupResolver(LoginFormShema)
  });

  const onSubmit = (data: IFormInputs) => console.log(data);


  return (
    <FormProvider {...form}  >
      <div >
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name='email' label='Почта' />
          <FormField name='password' label='Пароль' />

          <div className='d-flex align-center justify-between'>
            <Button disabled={!form.formState.isValid} type='submit' color="primary" variant="contained">
              Войти
            </Button>
            <Button onClick={onOpenRegister} className='ml-10' color="primary" variant="text">
              Регистрация
            </Button>
          </div>
        </form>
      </div>
    </FormProvider>

  )
}


