import React from 'react'
import { Fragment } from 'react'
import Breadcrumb from '../../components/Breadcrumb';
import AddAdmin from '../../components/user/AddAdmin';


const AddAdminPage = () => {
  return (
    <Fragment>
            <Breadcrumb pageName="Admin" />
            <main class="main bg-white px-2 md:py-6 rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
                <AddAdmin />
            </main>
        </Fragment>
  )
}

export default AddAdminPage