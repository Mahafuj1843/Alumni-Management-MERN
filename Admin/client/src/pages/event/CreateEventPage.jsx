import React, { Fragment } from 'react'
import CreateEvent from '../../components/event/CreateEvent'
import Breadcrumb from '../../components/Breadcrumb'
import { useLocation, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { eventDetailsById } from '../../apiRequest/eventRequest'
import { useSelector } from 'react-redux'
import { store } from '../../redux/store/store'
import { setEventDetails } from '../../redux/state/eventSlice'

const CreateEventPage = () => {

  const params = useParams()
  const location = useLocation()
  const eventDetails = useSelector((state) => state.event.eventDetails)

  // useEffect(()=>{
  //   store.dispatch(setEventDetails(null))
  //   if(params.id){
  //     eventDetailsById(params.id)
  //   }
  // },[location])
  return (
    <Fragment>
        <Breadcrumb pageName="Event" />
    <main class="main bg-white px-2 md:py-6 rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
        <CreateEvent/>
    </main>
</Fragment>
  )
}

export default CreateEventPage