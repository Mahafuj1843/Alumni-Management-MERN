import React from 'react'
import { Fragment } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Profile from "../../components/profile/Profile"

const ProfilePage = () => {
  return (
    <Fragment>
            <Breadcrumb pageName="profile" />
            <main class="main bg-white px-2 md:py-6 rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
                <Profile />
            </main>
        </Fragment>
  )
}

export default ProfilePage