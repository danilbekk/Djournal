import { MainLayout } from '../../layouts/MainLayout';
import { FullPost } from '../../components/Fullpost'
import { PostComments } from '../../components/PostComments';


export default function Post() {
  return (
    <MainLayout className='mb-20' contentFullWidth>
      <FullPost />
      <PostComments />
    </MainLayout>
  )
}
