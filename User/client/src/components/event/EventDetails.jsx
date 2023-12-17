import React, { Fragment, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { eventDetailsById } from '../../api_req/event';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { T24hrTo12hr } from '../../helper/timeConvert';
import { convert } from 'html-to-text'

const EventDetails = () => {
  let params = useParams()
  const eventDetails = useSelector((state) => (state.event.eventDetails))
  console.log(eventDetails)
  useEffect(() => {
    (async () => {
      await eventDetailsById(params.id)
    })();
  }, [])
  return (
    <Fragment>
      {
        eventDetails &&
      <div>
        <div className='w-full bg-[#2C1654] text-white px-[1rem] md:px-[2rem] lg:px-[5rem] py-5'>
          <div className="flex lg:gap-10">
            <div className='lg:w-[30%]'></div>
            <div className='w-full lg:w-[70%] flex flex-col gap-2 py-6'>
              <h4 className='text-lg uppercase'>{eventDetails?.topic}</h4>
              <h1 className='text-4xl font-bold'>{eventDetails?.title}</h1>
              <span className='text-lg'>Sponsored by <Link className='underline hover:no-underline'>Lorem ipsum dolor sit amet consectetur adipisicing elit</Link></span>
            </div>
          </div>
        </div>
        <div className='w-full px-[1rem] md:px-[2rem] lg:px-[5rem] py-5 bg-slate-100'>
          <div className='flex flex-col lg:flex-row gap-10'>
            <div className='w-full lg:w-[30%] bg-slate-100 border lg:shadow-xl lg:mt-[-176px]'>
              <div className='w-full h-64 overflow-hidden'>
                <img src="https://i.ibb.co/YRd71Nd/story-2.jpg" className='w-full object-fill h-64' alt="story" srcset="" />
              </div>
              <div class="flex flex-col gap-8 px-10 py-5">
                <div class="flex w-full gap-4">
                  <div class="w-7 h-7">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#2C1654" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                  <div className='space-y-2'>
                    <h3 className='text-sm md:text-lg'>{moment(eventDetails?.date).format("dddd D MMM, YYYY")}</h3>
                     <h3 className='text-sm md:text-lg font-medium'>{T24hrTo12hr(eventDetails.startTime) + " - " + T24hrTo12hr(eventDetails.endTime)}</h3>
                  </div>
                </div>
                <div class="flex w-full gap-4">
                  <div className='w-7 h-7'>
                    <svg width="30" height="30" viewBox="0 0 48 48" fill="#2C1654" stroke="#2C1654" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23.4236 41.8172C23.424 41.8174 23.4243 41.8176 24 41L23.4236 41.8172ZM24.5764 41.8172L24.58 41.8146L24.5891 41.8082L24.6209 41.7854C24.6482 41.7658 24.6875 41.7374 24.7379 41.7004C24.8387 41.6263 24.9842 41.5178 25.1681 41.3765C25.5357 41.0938 26.0571 40.6794 26.6811 40.1459C27.9277 39.08 29.5908 37.5328 31.2565 35.6059C34.5639 31.7799 38 26.3195 38 20.0769C38 16.3454 36.5264 12.7655 33.9016 10.1251C31.2765 7.48454 27.7149 6 24 6C20.2851 6 16.7235 7.48454 14.0984 10.1251C11.4736 12.7655 10 16.3454 10 20.0769C10 26.3195 13.4361 31.7799 16.7435 35.6059C18.4092 37.5328 20.0723 39.08 21.3189 40.1459C21.9429 40.6794 22.4643 41.0938 22.8319 41.3765C23.0158 41.5178 23.1613 41.6263 23.2621 41.7004C23.3125 41.7374 23.3518 41.7658 23.3791 41.7854L23.4109 41.8082L23.42 41.8146L23.4236 41.8172C23.7689 42.0603 24.2311 42.0603 24.5764 41.8172ZM24 41L24.5764 41.8172C24.576 41.8174 24.5757 41.8176 24 41ZM29 20C29 22.7614 26.7614 25 24 25C21.2386 25 19 22.7614 19 20C19 17.2386 21.2386 15 24 15C26.7614 15 29 17.2386 29 20Z" fill="#2C1654"/> </svg>
                  </div>
                  <h3 className='text-sm md:text-lg font-medium'>{eventDetails?.venue}</h3>
                </div>
                <div class="flex w-full gap-4">
                  <div class="w-7 h-7">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#2C1654" viewBox="0 -64 640 640"><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"/></svg>
                  </div>
                  <div className='space-y-2'>
                    <h3 className='text-sm md:text-lg font-bold'>This event is open to:</h3>
                    <div className='flex flex-wrap gap-1'>
                      {
                        eventDetails?.openTo?.map((item, i) =>
                          <div key={i} className='p-1 bg-[#2C1654] text-white font-medium'>{item}</div>
                        )
                      }
                    </div>
                  </div>
                </div>
                {
                eventDetails?.link &&
                <div class="flex w-full gap-4">
                  <div class="w-7 h-7">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#2C1654" class="bi bi-ticket-detailed-fill w-6 h-7" viewBox="0 0 16 16"> <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5Zm4 1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5Zm0 5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5ZM4 8a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H5a1 1 0 0 0-1 1Z"/> </svg>
                  </div>
                  <div className='space-y-1'>
                    <h3 className='text-md md:text-lg font-bold'>Free Event</h3>
                    <Link to={eventDetails?.link} target='black' className='text-lg font-medium underline hover:no-underline'>Register</Link>
                  </div>
                </div>
                }
                <div class="flex w-full gap-4">
                  <div class="w-7 h-7">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2C1654" class="bi bi-link-45deg" viewBox="0 0 16 16" class="w-7 h-7"> <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/> <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/> </svg>
                 </div>
                  <Link to={eventDetails?.eventWebsite} className='text-lg font-medium underline hover:no-underline'>Visit the event website</Link>
                </div>
              </div>
            </div>
            <div className='w-full md:w-[70%]'>
              <h1 className='text-3xl font-bold'>Event Details:</h1>
              <div>
                {convert(eventDetails?.desc, {wordwrap: 130 })}
              </div>
            </div>
          </div>
        </div>
      </div>
      }
    </Fragment>
  )
}

export default EventDetails