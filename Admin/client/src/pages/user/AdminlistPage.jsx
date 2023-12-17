import React, { Fragment, useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb';
import AdminList from '../../components/user/AdminList';
import AdminInfoModel from '../../components/user/AdminInfoModel';

const AdminlistPage = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <Fragment>
            <Breadcrumb pageName="Admin list" />
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <AdminList setShowModal={setShowModal} />
            </div>
            {showModal && <AdminInfoModel setShowModal={setShowModal} />}
        </Fragment>
    )
}

export default AdminlistPage