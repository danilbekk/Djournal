import { Divider, Paper, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AddCommentPost } from '../AddCommentForm';
import { Comment } from '../Comment/index'
import data from '../../data';

export const PostComments: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)
  const comments = data.comments[!activeTab ? 'popular' : 'new']
  return (
    <Paper elevation={0} className="mt-40 p-30">
      <div className="container">
        <Typography variant='h6' className='mb-20'>
          42 Комментарии
        </Typography>
        <Tabs onChange={(_, newValue) => setActiveTab(newValue)} className="mt-20" value={activeTab} indicatorColor="primary" textColor="primary">
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
        <AddCommentPost />
        <div className='mb-20' />
        {comments.map(comment => (
          <Comment
            key={comment.id}
            id={comment.id}
            user={comment.user}
            text={comment.text}
            createdAt={comment.createdAt} />
        )
        )
        }
      </div>
    </Paper>
  )
}
