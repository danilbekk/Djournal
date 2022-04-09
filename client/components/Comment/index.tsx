import React from 'react';
import { IconButton, Menu, MenuItem, Paper, Typography } from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';

import styles from './Comment.module.scss';

interface CommentPostProps {
  id: number;
  user: {
    fullName: string;
    avatarUrl: string;
  };
  text: string;
  createdAt: string;
}


export const Comment: React.FC<CommentPostProps> = ({ user, text, createdAt }) => {
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
          src={user.avatarUrl}
          alt='Avatar'

        />
        <b>{user.fullName}</b>
        <span>{createdAt}</span>
      </div>
      <Typography>
        {text}
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
