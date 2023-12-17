import React, { Fragment } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import CreateJob from '../../components/job/CreateJob'

const CreateJobpage = () => {
    return (

        <Fragment>
            <Breadcrumb pageName="Create job" />
            <main class="main bg-white px-2 md:py-6 rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
                <CreateJob />
            </main>
        </Fragment>
    )
}

export default CreateJobpage