import React, { Fragment } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ChangePassword from '../components/ChangePassword'

const ChangePasswordPage = () => {
  return (
    <Fragment>
            <Breadcrumb pageName="Change Password" />
            <main class="main bg-white px-2 md:py-6 rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
                <ChangePassword />
            </main>
        </Fragment>
  )
}

export default ChangePasswordPage
