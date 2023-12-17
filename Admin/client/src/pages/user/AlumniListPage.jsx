import React, { Fragment, useEffect, useState } from 'react'
import AlumniList from '../../components/user/AlumniList';
import Breadcrumb from '../../components/Breadcrumb';
import AlumniInfoModel from '../../components/user/AlumniInfoModel';

const AlumniListPage = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <Fragment>
            <Breadcrumb pageName="Alumni list" />
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <AlumniList setShowModal={setShowModal} />
            </div>
            {showModal && <AlumniInfoModel setShowModal={setShowModal} />}
        </Fragment>
    )
}

export default AlumniListPage