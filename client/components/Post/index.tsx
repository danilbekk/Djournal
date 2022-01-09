import React from 'react';
import { IconButton, Paper, Typography } from '@mui/material';
import styles from './Post.module.scss';
import Image from 'next/image';
import {
  ModeCommentOutlined as CommentsIcon,
  RepeatOutlined as RepostIcon,
  BookmarkBorderOutlined as FavoriteIcon,
  FileUploadOutlined as ShareIcon,
  KeyboardArrowUp as ArrowUp,
  KeyboardArrowDown as ArrowDown
} from '@mui/icons-material';

export const Post: React.FC = () => {
  return (
    <Paper classes={{ root: styles.paper }} className="p-20" elevation={0}>
      <Typography className={styles.title} variant="h5">
        Сообщество TJ снова собирает деньги на благотворительность к Новому
      </Typography>
      <Typography className="mt-10 mb-10">
        Наш сервис донатов обновился — комиссия ниже и разрешены иностранные карты. Так что пора его
        опробовать.
      </Typography>
      <Image
        src="https://kidpassage.com/images/publications/filmyi-pro-novyiy-god-i-rozhdestvo/1651_filmy-pro-novy-god-i-rozhdestvo1155868187.jpg"
        width={600}
        height={400}
        alt=""
      />
      <div className={styles.iconsContainer}>
        <ul>
          <li><IconButton>
            <CommentsIcon />
          </IconButton></li>
          <li><IconButton>
            <FavoriteIcon />
          </IconButton></li>
          <li><IconButton>
            <ShareIcon />
          </IconButton></li>
          <li><IconButton>
            <RepostIcon />
          </IconButton></li>
        </ul>
        <ul>
          <li>
            <IconButton>
              <ArrowUp />
            </IconButton>

          </li>
          <li>
            <IconButton>
              <ArrowDown />
            </IconButton>
          </li>
        </ul>
      </div>
    </Paper>
  );
};
