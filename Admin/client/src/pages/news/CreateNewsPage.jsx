import React, { Fragment } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import CreateNews from '../../components/news/CreateNews'

const CreateNewsPage = () => {
  return (
    <Fragment>
      <Breadcrumb pageName="Create News" />
      <main class="main bg-white px-2 md:py-6 rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
        <CreateNews />
      </main>
    </Fragment>
  )
}

export default CreateNewsPage
