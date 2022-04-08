import React from 'react';
import { Button, IconButton, Menu, MenuItem, Paper, Typography } from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';

import styles from './Comment.module.scss';

interface CommentProps {
  user: {
    fullname: string;
  };
  text: string;

}

export const Comment: React.FC<CommentProps> = ({ user, text }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <img
          src='https://leonardo.osnova.io/d1d6a257-f314-54eb-b94c-430fb0086082/-/scale_crop/108x108/-/format/webp/'
          alt='Avatar'

        />
        <b>Master Faster</b>
        <span>5 часов</span>
      </div>
      <Typography>
        Ну это ещё не самый плохой вариант.
      </Typography>
      <span className={styles.replyBtn}>
        Ответить
      </span>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        elevation={2}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </div>
  );
};
