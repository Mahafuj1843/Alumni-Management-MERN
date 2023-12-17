import React, { Fragment, useEffect, useRef, useState } from 'react'
import Checkbox from '../Checkbox'
import JoditEditor from 'jodit-react';
import { ErrorToast, IsEmpty } from '../../helper/formHelper';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { eventCreateRequest, eventDetailsById, updateEvent } from '../../apiRequest/eventRequest';
import { useSelector } from 'react-redux';
import { onChangeInput, resetFormInput, setOpenTo } from '../../redux/state/eventSlice';
import { store } from '../../redux/store/store';
import moment from 'moment/moment';

const CreateEvent = () => {
    const editor = useRef(null);
    const openFor = ["Alumni", "Students", "Member", "Staff", "Faculty"]
    const navigate = useNavigate()
    let params = useParams()
    const location = useLocation()
    const FormValue = useSelector((state) => (state.event.FormValue))

    const handleCheck = (event) => {
        var updatedList = [...FormValue?.openTo];
        if (event.target.checked) {
            updatedList = [...FormValue?.openTo, event.target.value];
        } else {
            updatedList.splice(FormValue?.openTo.indexOf(event.target.value), 1);
        }
        store.dispatch(setOpenTo(updatedList));
    };

    useEffect(() => {
        (async () => {
            if (params.id) {
                await eventDetailsById(params.id)
            } else {
                store.dispatch(resetFormInput())
            }
        })();
    }, [location])

    const validation = () => {
        if (IsEmpty(FormValue.title)) {
            ErrorToast("Title required!");
        } else if (IsEmpty(FormValue.topic)) {
            ErrorToast("Topic required!");
        } else if (IsEmpty(FormValue.venue)) {
            ErrorToast("Venue required!");
        } else if (IsEmpty(FormValue.date)) {
            ErrorToast("Date required!");
        } else if (IsEmpty(FormValue.startTime)) {
            ErrorToast("Start Time required!");
        } else if (IsEmpty(FormValue.endTime)) {
            ErrorToast("End Time required!");
        } else if (IsEmpty(FormValue.eventWebsite)) {
            ErrorToast("Event Website Link required!");
        } else if (IsEmpty(FormValue.openTo)) {
            ErrorToast("Open for required!");
        } else return true

        return false;
    }

    const onSave = async () => {
        if (validation()){
            const result = await eventCreateRequest(FormValue)
            if (result) navigate('/event/eventlist')
        }
    }

    const onUpdate = async () => {
        if (validation()){
            const result = await updateEvent(FormValue, params.id)
            if (result) navigate('/event/eventlist')
        }
    }

    return (
        <Fragment>
            <div class="w-full max-w-xl mx-auto">
                <div className='space-y-4'>
                    <h1 class="text-xl font-semibold text-black dark:text-white">
                        {params.id ? "Update Event" : "Create New Event"}
                    </h1>

                    <div class="space-y-4">
                        <div className="flex justify-between gap-4 ">
                            <div class=" w-full">
                                <label
                                    class="mb-3 block text-black dark:text-white"
                                    for="job-title"
                                >
                                    Title
                                </label>
                                <input
                                    onChange={(e) => { store.dispatch(onChangeInput({ name: "title", value: e.target.value })) }}
                                    value={FormValue.title}
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    type="text"
                                    id="Event-title"
                                    name="Event-title"
                                    placeholder="ex: Junior Programming Contest "
                                    autoFocus
                                />
                            </div>
                        </div>
                        <div className="flex justify-between gap-4 ">
                            <div class=" w-full">
                                <label
                                    class="mb-3 block text-black dark:text-white"
                                    for="job-title"
                                >
                                    Topic
                                </label>
                                <input
                                    onChange={(e) => { store.dispatch(onChangeInput({ name: "topic", value: e.target.value })) }}
                                    value={FormValue.topic}
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    type="text"
                                    id="Event-topic"
                                    name="Event-topic"
                                    placeholder="ex: Programing contest / Presentation / ......"
                                    autofocus
                                />
                            </div>
                        </div>
                        <div className="flex justify-between gap-4 ">
                            <div class=" w-full">
                                <label
                                    class="mb-3 block text-black dark:text-white"
                                    for="job-title"
                                >
                                    Venue
                                </label>
                                <input
                                    onChange={(e) => { store.dispatch(onChangeInput({ name: "venue", value: e.target.value })) }}
                                    value={FormValue.venue}
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    type="text"
                                    id="Event-venue"
                                    name="Event-venue"
                                    placeholder="ex: At central library of IIUC "
                                    autofocus
                                />
                            </div>
                        </div>
                        <div className="flex justify-between gap-4 ">
                            <div class=" w-full">
                                <label
                                    class="mb-3 block text-black dark:text-white"
                                    for="apply-link"
                                >
                                    Link (optional)
                                </label>
                                <input
                                    onChange={(e) => { store.dispatch(onChangeInput({ name: "link", value: e.target.value })) }}
                                    value={FormValue.link}
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    type="text"
                                    id="apply-link"
                                    name="apply-link"
                                    placeholder="e.g. Registration link and etc"
                                />
                            </div>
                            <div class=" w-full">
                                <label
                                    class="mb-3 block text-black dark:text-white"
                                    for="apply-link"
                                >
                                    Date
                                </label>
                                <input
                                    onChange={(e) => { store.dispatch(onChangeInput({ name: "date", value: new Date(e.target.value) })) }}
                                    value={moment(FormValue.date).format('YYYY-MM-DD')}
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    type="date"
                                    id="event-date"
                                    name="event-date"
                                />
                            </div>
                        </div>
                        <div class="flex w-full justify-between  gap-4 ">
                            <div class="w-full md:w-1/2   md:mb-0 ">
                                <label for="company" class="mb-3 block text-black dark:text-white">
                                    Starting Time
                                </label>
                                <input
                                    onChange={(e) => { store.dispatch(onChangeInput({ name: "startTime", value: e.target.value })) }}
                                    value={FormValue.startTime}
                                    type="time"
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    id="company"
                                    name="company"
                                    placeholder="ex: 10 AM"
                                />
                            </div>
                            <div class="w-full md:w-1/2   md:mb-0 ">
                                <label for="company" class="mb-3 block text-black dark:text-white">
                                    Ending Time
                                </label>
                                <input
                                    onChange={(e) => { store.dispatch(onChangeInput({ name: "endTime", value: e.target.value })) }}
                                    value={FormValue.endTime}
                                    type="time"
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    id="company"
                                    name="company"
                                    placeholder="ex: 1 PM"
                                />
                            </div>

                        </div>
                        <div class=" w-full">
                            <label
                                class="mb-3 block text-black dark:text-white"
                                for="apply-link"
                            >
                                Event website
                            </label>
                            <input
                                onChange={(e) => { store.dispatch(onChangeInput({ name: "eventWebsite", value: e.target.value })) }}
                                value={FormValue.eventWebsite}
                                class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                type="text"
                                id="apply-link"
                                name="apply-link"
                                placeholder="https://www.djangoproject.com/event"
                            />
                        </div>
                        <div class=" w-full">
                            <label
                                class="mb-3 block text-black dark:text-white"
                                for="apply-link"
                            >
                                Open for
                            </label>
                            <div class="flex items-center gap-3 flex-wrap">
                                {
                                    openFor.map((item, i) =>
                                        <Checkbox key={i} checked={FormValue?.openTo?.find((p) => p === item)} handleCheck={handleCheck} label={item} />
                                    )
                                }
                            </div>
                        </div>
                        <div>
                            <label
                                for="desc"
                                class="mb-3 block text-black dark:text-white"
                            >
                                Description
                            </label>
                            <JoditEditor className='h-[30px] overflow-y-scroll'
                                ref={editor}
                                // value={content}
                                // config={config}  
                                tabIndex={1}
                                onChange={(newContent) => { store.dispatch(onChangeInput({ name: "desc", value: newContent })) }}
                                value={FormValue.desc}
                            // onBlur={newContent => setContent(newContent)}
                            // onChange={newContent => setContent(newContent)}
                            />
                        </div>
                        <button onClick={params.id ? onUpdate : onSave} className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                            {params.id ? "Save" : "Create"}
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CreateEvent