import React from 'react';
import ArrowRightIcon from '@mui/icons-material/NavigateNextOutlined';
import data from '../../data';
import styles from './SideComments.module.scss';
import { CommentItem } from './CommentItem';
import clsx from 'clsx';

export const SideComments = () => (
  <div className={clsx(styles.root)}>
    {data.comments.popular.map((obj) => <CommentItem key={obj.id} {...obj} />)}
  </div>
);
