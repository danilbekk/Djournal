import React, { useState } from 'react'
import { Button, Input } from '@mui/material'
import styles from './AddCommentForm.module.scss'

export const AddCommentPost = () => {
  const [clicked, setClicked] = useState(false)
  return (
    <div className={styles.form}>
      <Input
        onFocus={() => setClicked(true)}
        minRows={clicked ? 5 : 1}
        classes={{ root: styles.fieldRoot }}
        placeholder="Написать комментарий..."
        fullWidth
        multiline
      />
      {clicked && (
        <Button
          className={styles.addButton}
          variant="contained"
          color="primary"
        >
          Опубликовать
        </Button>
      )}
    </div>

  )
}
