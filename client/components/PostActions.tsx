import {
  ModeCommentOutlined as CommentsIcon,
  RepeatOutlined as RepostIcon,
  BookmarkBorderOutlined as FavoriteIcon,
  FileUploadOutlined as ShareIcon,
  KeyboardArrowUp as ArrowUp,
  KeyboardArrowDown as ArrowDown
} from '@mui/icons-material'
import { IconButton } from '@mui/material'

import React, { CSSProperties } from 'react'


const styles: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  top: '5',
  listStyle: 'none',
  padding: '0',
  margin: '0',
};

export const PostActions: React.FC = () => {
  return (
       <ul style={styles}>
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

        //  <ul>
        //   <li>
        //     <IconButton>
        //       <ArrowUp />
        //     </IconButton>

        //   </li>
        //   <li>
        //     <IconButton>
        //       <ArrowDown />
        //     </IconButton>
        //   </li>
        // </ul>     
  )
}
