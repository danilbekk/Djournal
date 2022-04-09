import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  TextField,
  Typography
} from '@mui/material'
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material'
import React, { useState } from 'react'
import { MainForm } from './forms/Main'
import styles from './AuthDialog.module.scss';

interface AuthDialogProps {
  onClose: () => void;
  visible: boolean;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, visible }) => {
  const [formType, setFormType] = useState<'main' | 'email'>('main')

  const onOpenLogin = () => setFormType('email')
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
                  <ArrowBackIcon /> Войти через почту
                </p>
              )}
            </Typography>
            {
              formType === 'main' && (
                <><MainForm onOpenLogin={onOpenLogin} /></>
              )
            }
            {
              formType === 'email' && (
                <div >
                  <form>
                    <TextField
                      className="mb-20"
                      size="small"
                      label="Почта"
                      variant="outlined"
                      fullWidth
                      required
                    />
                    <TextField
                      className="mb-20"
                      size="small"
                      label="Пароль"
                      variant="outlined"
                      fullWidth
                      required
                    />
                    <Button color="primary" variant="contained">
                      Войти
                    </Button>
                  </form>
                </div>
              )
            }
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}
