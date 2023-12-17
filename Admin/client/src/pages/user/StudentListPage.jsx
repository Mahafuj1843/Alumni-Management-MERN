import React, { Fragment, useState } from 'react'
import StudendList from '../../components/user/StudendList'
import Breadcrumb from '../../components/Breadcrumb'
import StudentinfoModel from '../../components/user/StudentinfoModel'

const StudentListPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <Breadcrumb pageName="Students list" />
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <StudendList setShowModal={setShowModal} />
      </div>
      {showModal && <StudentinfoModel setShowModal={setShowModal} />}
    </Fragment>
  )
}

export default StudentListPage