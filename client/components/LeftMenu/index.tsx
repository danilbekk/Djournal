import React from 'react';
import { Button } from '@mui/material';
import {
  WhatshotOutlined as FireIcon,
  SmsOutlined as MessageIcon,
  TrendingUpOutlined as RateIcon,
  FormatListBulletedOutlined as ListIcon,
} from '@mui/icons-material';
import styles from './LeftMenu.module.scss';
import Link from 'next/link';

export const LeftMenu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Button>
            <FireIcon />
            Лента
          </Button>
        </li>
        <li>
          <Button>
            <MessageIcon />
            Сообщения
          </Button>
        </li>
        <li>
          <Link href="/rating">
            <a>
              <Button>
                <RateIcon />
                Рейтинг TJ
              </Button>
            </a>
          </Link>

        </li>
        <li>
          <Button>
            <ListIcon />
            Подписки
          </Button>
        </li>
      </ul>
    </div>
  );
};
