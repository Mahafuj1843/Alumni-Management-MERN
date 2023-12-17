import React from 'react'
import { useEffect } from 'react'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { userDetailsById } from '../../apiRequest/userRequest'

const AdminInfoModel = ({ setShowModal }) => {
    const id = useSelector((state) => state.user.id)
    const profileDetails = useSelector((state) => state.user.FormValue)
    useEffect(() => {
        userDetailsById(id)
    }, [id])
  return (
    <Fragment>
            <div
                className="flex justify-center items-center  fixed inset-0 z-999 outline-none focus:outline-none"
            >
                <div onClick={() => setShowModal(false)} className="fixed h-full w-full left-0 top-0 bg-black bg-opacity-50 z-[-1]"></div>
                <div className="relative left-24 w-1/2 h-1/2 mx-auto ">
                    <div className="p-3 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Alumni Info
                            </h3>
                            <button
                                className="p-3 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:bg-gray-2 rounded-full"
                                onClick={() => setShowModal(false)}                  >
                                <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.8913 9.99599L19.5043 2.38635C20.032 1.85888 20.032 1.02306 19.5043 0.495589C18.9768 -0.0317329 18.141 -0.0317329 17.6135 0.495589L10.0001 8.10559L2.38673 0.495589C1.85917 -0.0317329 1.02343 -0.0317329 0.495873 0.495589C-0.0318274 1.02306 -0.0318274 1.85888 0.495873 2.38635L8.10887 9.99599L0.495873 17.6056C-0.0318274 18.1331 -0.0318274 18.9689 0.495873 19.4964C0.717307 19.7177 1.05898 19.9001 1.4413 19.9001C1.75372 19.9001 2.13282 19.7971 2.40606 19.4771L10.0001 11.8864L17.6135 19.4964C17.8349 19.7177 18.1766 19.9001 18.5589 19.9001C18.8724 19.9001 19.2531 19.7964 19.5265 19.4737C20.0319 18.9452 20.0245 18.1256 19.5043 17.6056L11.8913 9.99599Z" fill=""></path></svg>
                            </button>
                        </div>
                        <div className="relative p-4 job-info space-y-2 mb-2 ">
                            <div className='flex items-center'>
                                <div className='w-[120px] flex justify-between'>
                                    <p class="text-base font-semibold dark:text-white text-gray-800">Name </p>
                                    <span className='font-bold'>:</span>
                                </div>
                                <p class="ms-6 text-base dark:text-gray-300 text-gray-600">{profileDetails?.firstname + " " + profileDetails?.lastname}</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='w-[120px] flex justify-between'>
                                    <p class="text-base font-semibold dark:text-white text-gray-800">Email </p>
                                    <span className='font-bold'>:</span>
                                </div>
                                <p class="ms-6 text-base dark:text-gray-300 text-gray-600">{profileDetails?.email}</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='w-[120px] flex justify-between'>
                                    <p class="text-base font-semibold dark:text-white text-gray-800">Contact No</p>
                                    <span className='font-bold'>:</span>
                                </div>
                                <p class="ms-6 text-base dark:text-gray-300 text-gray-600">{profileDetails?.phone}</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='w-[120px] flex justify-between'>
                                    <p class="text-base font-semibold dark:text-white text-gray-800">Address</p>
                                    <span className='font-bold'>:</span>
                                </div>
                                <p class="ms-6 text-base dark:text-gray-300 text-gray-600">{profileDetails?.address}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
  )
}

export default AdminInfoModel