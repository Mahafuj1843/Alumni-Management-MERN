import React, { Fragment, useState } from 'react'
import EventList from '../../components/event/EventList';
import Breadcrumb from '../../components/Breadcrumb';
import EventInfoModel from '../../components/event/EventInfoModel';

const EventListPage = () => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <Fragment>
            <Breadcrumb pageName="Event list" />
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <EventList setShowModal={setShowModal}/>
            </div>
            {showModal && <EventInfoModel setShowModal={setShowModal} />}
        </Fragment>
    );
}

export default EventListPage
