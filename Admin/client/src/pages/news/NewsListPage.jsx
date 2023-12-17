import React, { Fragment, useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import NewsList from '../../components/news/NewsList';
import NewsInfoModel from '../../components/news/NewsInfoModel';
import NewsUpdateModel from '../../components/news/NewsUpdateModel';

const NewsListPage = () => {
    const [update, setUpdate] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    return (
        <Fragment>
            <Breadcrumb pageName="News list" />
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <NewsList setShowModal={setShowModal} showUpdateModal={showUpdateModal} setShowUpdateModal={setShowUpdateModal} update={update} setUpdate={setUpdate}/>
            </div>
            {showModal && <NewsInfoModel setShowModal={setShowModal} />}
            {showUpdateModal && <NewsUpdateModel setShowUpdateModal={setShowUpdateModal} setUpdate={setUpdate}/>}
        </Fragment>
    )
}

export default NewsListPage