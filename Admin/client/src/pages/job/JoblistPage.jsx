import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import JobList from '../../components/job/JobList';
import Breadcrumb from '../../components/Breadcrumb';
import JobInfoModel from '../../components/job/JobInfoModel';
import UpdateModel from '../../components/job/UpdateModel';

const JoblistPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    
    return (
        <Fragment>
            <Breadcrumb pageName="Job list" />
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <JobList setShowModal={setShowModal} setShowUpdateModal={setShowUpdateModal} showUpdateModal={showUpdateModal}/>
            </div>
            {showModal && <JobInfoModel setShowModal={setShowModal} />}
            {showUpdateModal && <UpdateModel setShowUpdateModal={setShowUpdateModal} showUpdateModal={showUpdateModal}/>}
        </Fragment>
    );
};



export default JoblistPage