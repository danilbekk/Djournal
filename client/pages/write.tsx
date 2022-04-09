import React from 'react'
import { NextPage } from 'next';
import { WriteForm } from '../components/WriteForm';
import { MainLayout } from '../layouts/MainLayout';

const WritePage: NextPage = () => {
  return (
    <MainLayout className="main-layout-white" hideComments hideMenu>
      <WriteForm />
    </MainLayout>

  )
}

export default WritePage
