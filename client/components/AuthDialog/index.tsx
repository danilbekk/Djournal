import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  TextField,
  Typography
} from '@mui/material'
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material'
import React, { useState } from 'react'
import { MainForm } from './forms/Main'
import styles from './AuthDialog.module.scss';
import { LoginForm } from './forms/Login';
import { RegisterForm } from './forms/Register';

interface AuthDialogProps {
  onClose: () => void;
  visible: boolean;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, visible }) => {
  const [formType, setFormType] = useState<'main' | 'login' | 'register'>('main')

  const onOpenLogin = () => setFormType('login')
  const onOpenRegister = () => setFormType('register')


  return (
    <Dialog
      open={visible}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth='xs'
      fullWidth
    >
      <DialogContent>
        <DialogContentText>
          <div className={styles.content}>
            <Typography className={styles.title}>
              {formType === 'main' ? (
                "Вход в TJ"
              ) : (
                <p onClick={() => setFormType('main')} className={styles.backTitle}>
                  <ArrowBackIcon /> К авторизации
                </p>
              )}
            </Typography>
            {formType === 'main' && <MainForm onOpenLogin={onOpenLogin} />}
            {formType === 'login' && <LoginForm onOpenRegister={onOpenRegister} />}
            {formType === 'register' && <RegisterForm onOpenLogin={onOpenLogin} />}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}
