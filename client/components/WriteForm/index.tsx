import { Button, Input } from '@mui/material'
import React from 'react'
import dynamic from 'next/dynamic'
import styles from './WriteForm.module.scss'

const Editor = dynamic(() => import('../Editor').then(m => m.Editor), { ssr: false })

interface WriteFormProps {
  title?: string;
}

export const WriteForm: React.FC<WriteFormProps> = ({ title }) => {
  return (
    <div>
      <Input
        value={title}
        classes={{ root: styles.titleField }}
        placeholder="Заголовок"
      />
      <div className={styles.editor}>
        <Editor />
      </div>
      <Button variant="contained">
        Опубликовать
      </Button>
    </div>

  )
}
