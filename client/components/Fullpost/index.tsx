import React from 'react'
import { Button, Paper, Typography } from '@mui/material';
import { PostActions } from '../PostActions';
import {
  TextsmsOutlined as MessageIcon,
  PersonAddAltOutlined as UserAddIcon
} from '@mui/icons-material';

import styles from './FullPost.module.scss'

export const FullPost = () => {
  return (
    <Paper elevation={0} className={styles.paper} >
      <div className="container">
        <Typography variant="h5" fontWeight={'500'} className={styles.title}>
          Twitter начнёт тестировать функцию редактирования твитов «в ближайшие месяцы»
        </Typography>

        <div>
          <Typography>
            Сначала она будет доступна пользователям платной подписки.
            Twitter подтвердила, что работает над функцией редактирования твитов с 2021 года. Тестирование будет доступно подписчикам Twitter Blue.
          </Typography>
        </div>
        <div style={{ width: 250, marginLeft: -10 }}>
          <PostActions />
        </div>
        <div className='d-flex justify-between align-center mt-30 mb-30'>
          <div className={styles.userInfo}>
            <img
              src='https://leonardo.osnova.io/d1d6a257-f314-54eb-b94c-430fb0086082/-/scale_crop/108x108/-/format/webp/'
              alt='Avatar'
            />
            <b>Roberto Carlos</b>
            <span>+1565</span>
          </div>
          <div>
            <Button variant='contained' className='mr-15'>
              <MessageIcon />
            </Button>
            <Button variant='contained'>
              <UserAddIcon />
              <b className='ml-10'>Подписаться</b>
            </Button>
          </div>
        </div>
      </div>
    </Paper>

  )
}
