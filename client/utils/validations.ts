import * as yup from 'yup'

export const LoginFormShema = yup.object({
  email: yup.string().email('Неверная почта').required('Обязательное поле'),
  password: yup.string().min(6, "Пароль должны быть не менее 6 символов").required('Обязательное поле'),
}).required();

export const RegisterRormShema = yup.object({
  fullName: yup.string().required('Имя и фамилия обязательны')
}).required().concat(LoginFormShema);