import Head from 'next/head';
import { Header } from '../components/Header';
import { LeftMenu } from '../components/LeftMenu';
import { Post } from '../components/Post';

export default function Home() {
  return (
    <div>
      <Head>
        <title>DJournal</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className='wrapper'>
      <div className="leftSide">
        <LeftMenu />
      </div>
      <div className="content">
        <Post />
      </div>
      <div className="rightSide"></div>
    </div>
      </div>
     
  );
}
