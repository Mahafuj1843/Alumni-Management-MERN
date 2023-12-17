import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Trips = () => {
    return (
        <Fragment>
            <div className='py-10 lg:py-16 w-full px-[2rem] md:px-[3rem] lg:px-[5rem] bg-gray-900 text-white'>
                <div className='w-full flex flex-col items-center py-8 space-y-5 mb-4'>
                    <div className='flex flex-col items-center mb-7'>
                        <h4 className='text-lg font-bold'>Travel</h4>
                        <span className='w-14 h-2 bg-orange-600'></span>
                    </div>
                    <h1 className='text-2xl md:text-5xl font-bold text-center md:px-5 lg:px-16'>2023 Is Your Time To Explore</h1>
                    <h4 className='text-lg lg:text-2xl font-medium text-center md:px-5 lg:px-16'>The world is calling. Will you answer? Here’s what’s in store for 2023: Time-tested journeys and brand-new adventures. This is the year to wander and wonder.</h4>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className='relative cursor-pointer trips-card bg-black'>
                        <div className='w-full h-56 overflow-hidden'>
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QBKRXhpZgAASUkqAAgAAAACAA4BAgAcAAAAJgAAABIBAwABAAAAAQAAAAAAAABUaGUgQmVhdXR5IG9mIHRoZSBTdW5kYXJiYW5z/+0AblBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAABRHAJQAA5NYXN1ZCBBbCBNYW11bhwCeAAcVGhlIEJlYXV0eSBvZiB0aGUgU3VuZGFyYmFucxwCbgAYR2V0dHkgSW1hZ2VzL2lTdG9ja3Bob3RvAP/hBSVodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iPgoJPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KCQk8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOklwdGM0eG1wQ29yZT0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcENvcmUvMS4wL3htbG5zLyIgICB4bWxuczpHZXR0eUltYWdlc0dJRlQ9Imh0dHA6Ly94bXAuZ2V0dHlpbWFnZXMuY29tL2dpZnQvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwbHVzPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3htcC8xLjAvIiAgeG1sbnM6aXB0Y0V4dD0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcEV4dC8yMDA4LTAyLTI5LyIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgcGhvdG9zaG9wOkNyZWRpdD0iR2V0dHkgSW1hZ2VzL2lTdG9ja3Bob3RvIiBHZXR0eUltYWdlc0dJRlQ6QXNzZXRJRD0iMTMwNjgzMzk3MCIg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" className='w-full object-fill h-56' alt="story" srcset="" />
                        </div>
                        <div className='z-20 absolute left-8 -mt-[57px] md:-mt-[63px] lg:-mt-[60px] p-5 md:p-7 lg:p-4 rounded-[45%] border-[6px] border-gray-800 bg-black/70 text-white flex gap-3 items-center justify-center'>
                            <span>
                                <h3 className='text-lg lg:text-xl font-medium'>AUG</h3>
                                <h2 className='text-2xl md:text-4xl font-bold'>25</h2>
                            </span>
                            <span className='text-2xl md:text-4xl font-bold'>-</span>
                            <span>
                                <h3 className='text-lg lg:text-xl font-medium'>AUG</h3>
                                <h2 className='text-2xl md:text-4xl font-bold'>30</h2>
                            </span>
                        </div>
                        <div className='px-7 pb-7 pt-20 space-y-3'>
                            <h1 className='text-xl md:text-3xl font-bold'>Sundarban National Park</h1>
                            <h2 className='text-lg lg:text-xl font-bold'>Exploring a place of natural beauty</h2>
                            <h3 className='text-base lg:text-lg font-medium'>The Sundarbans is undoubtedly one of the most beautiful places in Bangladesh, and easily one of the best tourist attractions in the country.</h3>
                        </div>
                    </div>
                    <div className='relative cursor-pointer trips-card bg-black'>
                        <div className='w-full h-56 overflow-hidden'>
                            <img src="data:image/jpeg;base64,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" className='w-full object-fill h-56' alt="story" srcset="" />
                        </div>
                        <div className='z-20 absolute left-8 -mt-[57px] md:-mt-[63px] lg:-mt-[60px] p-5 md:p-7 lg:p-4 rounded-[45%] border-[6px] border-gray-800 bg-black/70 text-white flex gap-3 items-center justify-center'>
                            <span>
                                <h3 className='text-lg lg:text-xl font-medium'>SEP</h3>
                                <h2 className='text-2xl md:text-4xl font-bold'>25</h2>
                            </span>
                            <span className='text-2xl md:text-4xl font-bold'>-</span>
                            <span>
                                <h3 className='text-lg lg:text-xl font-medium'>SEP</h3>
                                <h2 className='text-2xl md:text-4xl font-bold'>30</h2>
                            </span>
                        </div>
                        <div className='px-7 pb-7 pt-20 space-y-3'>
                            <h1 className='text-xl md:text-3xl font-bold'>Nepal</h1>
                            <h2 className='text-lg lg:text-xl font-bold'>A springtime sojourn through temple country</h2>
                            <h3 className='text-base lg:text-lg font-medium'>Attend the resplendent Aoi Matsuri Festival in Kyoto, see the best of Tokyo and venture off the beaten path by trolley, gondola and cable car into the Japan Alps.</h3>
                        </div>
                    </div>
                    <div className='relative cursor-pointer trips-card bg-black'>
                        <div className='w-full h-56 overflow-hidden'>
                            <img src="https://i.ibb.co/7kQjn3c/southern-africa-trip.jpg" className='w-full object-fill h-56' alt="story" srcset="" />
                        </div>
                        <div className='z-20 absolute left-8 -mt-[57px] md:-mt-[63px] lg:-mt-[60px] p-5 md:p-7 lg:p-4 rounded-[45%] border-[6px] border-gray-800 bg-black/70 text-white flex gap-3 items-center justify-center'>
                            <span>
                                <h3 className='text-lg lg:text-xl font-medium'>DEC</h3>
                                <h2 className='text-2xl md:text-4xl font-bold'>25</h2>
                            </span>
                            <span className='text-2xl md:text-4xl font-bold'>-</span>
                            <span>
                                <h3 className='text-lg lg:text-xl font-medium'>DEC</h3>
                                <h2 className='text-2xl md:text-4xl font-bold'>30</h2>
                            </span>
                        </div>
                        <div className='px-7 pb-7 pt-20 space-y-3'>
                            <h1 className='text-xl md:text-3xl font-bold'>Tanzania</h1>
                            <h2 className='text-lg lg:text-xl font-bold'>Travel with IIUC students</h2>
                            <h3 className='text-base lg:text-lg font-medium'>Take in the sights and sounds of the Serengeti, watch the great wildebeest migration and fall asleep in luxurious lodges after eventful days of wildlife spotting.</h3>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center py-7 lg:py-10'>
                    <Link to='#' className='bg-[#2C1654] px-3 lg:px-5 py-2 lg:py-4 text-lg lg:text-xl font-semibold text-white hover:opacity-80'>Explore more trips</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Trips

