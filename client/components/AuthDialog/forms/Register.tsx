import { Button } from '@mui/material'
import React from 'react'
import { FormField } from '../../FormField';
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterRormShema } from '../../../utils/validations';
interface RegisterFormProps {
  onOpenLogin: () => void;
}

interface IFormInputs {
  email: string;
  password: string;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onOpenLogin }) => {
  const form = useForm<IFormInputs>({
    resolver: yupResolver(RegisterRormShema)
  });

  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <div >
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} >
          <FormField name='fullName' label='Имя и фамилия' />
          <FormField name='email' label='Почта' />
          <FormField name='password' label='Пароль' />
          <div className='d-flex align-center justify-between'>
            <Button disabled={!form.formState.isValid} type='submit' color="primary" variant="contained">
              Зарегестрироваться
            </Button>
            <Button onClick={onOpenLogin} className='ml-10' color="primary" variant="text">
              Войти
            </Button>
          </div>
        </form>
      </FormProvider>

    </div>
  )
}
