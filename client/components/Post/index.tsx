import React from 'react';
import { Paper, Typography } from '@mui/material';
import styles from './Post.module.scss';
import Image from 'next/image';

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
    </Paper>
  );
};
