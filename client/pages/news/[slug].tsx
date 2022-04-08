import { MainLayout } from '../../layouts/MainLayout';
import { FullPost } from '../../components/Fullpost'
import { Divider, Paper, Tab, Typography, Tabs } from '@mui/material';
import { Comment } from '../../components/Comment';
export default function Home() {
  return (
    <MainLayout className='mb-20' contentFullWidth>
      <FullPost />
      <Paper elevation={0} className="mt-40 p-30">
        <Typography variant='h6' className='mb-20'>
          42 Комментарии
        </Typography>
        <Tabs className="mt-20" value={0} indicatorColor="primary" textColor="primary">
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
        <Comment />
        <Comment />
        <Comment />
      </Paper>
    </MainLayout>
  )
}
