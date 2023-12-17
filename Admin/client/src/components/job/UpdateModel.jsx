import React, { Fragment, useEffect, useRef } from 'react'
import moment from 'moment';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { jobDetailsById, updateJobdetails } from '../../apiRequest/JobRequest';
import { ErrorToast, IsEmpty } from '../../helper/formHelper';

const UpdateModel = ({ setShowUpdateModal }) => {


    let titleRef, salaryRef, linktoRef, jobtypeRef, locaitonRef, experienceRef, companyRef, dateRef, categoryRef = useRef();
    let navigate = useNavigate();
    let Jobdetails = useSelector((state) => (state.job.JobDetails));
    let selectedJob = useSelector((state) => (state.job.selectedJob));

    useEffect(() => {
        (async () => {
            await jobDetailsById(selectedJob);
        })();
    }, [selectedJob])

    const onjobUpdate = () => {
        let title = titleRef.value;
        let salary = salaryRef.value;
        let linkto = linktoRef.value;
        let date = dateRef.value
        let jobtype = jobtypeRef.value;
        let location = locaitonRef.value;
        let experience = experienceRef.value;
        let company = companyRef.value;
        let category = categoryRef.value;

        if (IsEmpty(title)) {
            ErrorToast("Title Required !");
        } else if (IsEmpty(salary)) {
            ErrorToast("Salary Required !");
        } else if (IsEmpty(linkto)) {
            ErrorToast("Link to Apply Required !");
        } else if (IsEmpty(date)) {
            ErrorToast("Deadline Date Required !");
        } else if (IsEmpty(jobtype)) {
            ErrorToast("Job type is  Required !");
        } else if (IsEmpty(location)) {
            ErrorToast("Location is Required !");
        } else if (IsEmpty(experience)) {
            ErrorToast("Location is Required !");
        }else if (IsEmpty(company)) {
            ErrorToast("Company Required !");
        } else if (IsEmpty(category)) {
            ErrorToast("Company website is  Required !");
        } else {
            if (updateJobdetails(Jobdetails._id, title, salary, linkto, date, jobtype, location,  company, experience, category)) {
                setShowUpdateModal(false);
            } else navigate("/job/joblist");
        }
    };
    return (
        <Fragment>
            <div
                className="flex justify-center items-center overflow-x-hidden no-scrollbar fixed inset-0 z-999 outline-none focus:outline-none"
            >
                <div onClick={() => setShowUpdateModal(false)} className="fixed h-full w-full left-0 top-0 bg-black bg-opacity-50 z-[-1]"></div>
                <div className="relative left-24 w-1/2 h-fit my-6 mx-auto ">
                    <div className="p-3 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Update Job Info
                            </h3>
                            <button
                                className="p-3 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none rounded-full hover:bg-gray-2"
                                onClick={() => setShowUpdateModal(false)}                  >
                                <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.8913 9.99599L19.5043 2.38635C20.032 1.85888 20.032 1.02306 19.5043 0.495589C18.9768 -0.0317329 18.141 -0.0317329 17.6135 0.495589L10.0001 8.10559L2.38673 0.495589C1.85917 -0.0317329 1.02343 -0.0317329 0.495873 0.495589C-0.0318274 1.02306 -0.0318274 1.85888 0.495873 2.38635L8.10887 9.99599L0.495873 17.6056C-0.0318274 18.1331 -0.0318274 18.9689 0.495873 19.4964C0.717307 19.7177 1.05898 19.9001 1.4413 19.9001C1.75372 19.9001 2.13282 19.7971 2.40606 19.4771L10.0001 11.8864L17.6135 19.4964C17.8349 19.7177 18.1766 19.9001 18.5589 19.9001C18.8724 19.9001 19.2531 19.7964 19.5265 19.4737C20.0319 18.9452 20.0245 18.1256 19.5043 17.6056L11.8913 9.99599Z" fill=""></path></svg>
                            </button>
                        </div>
                        <div class="job-info space-y-2 mt-2 mx-3">
                            <div className="flex justify-between gap-4 ">
                                <div class=" w-full">
                                    <label
                                        class="mb-3 block text-black dark:text-white"
                                        for="job-title"
                                    >
                                        Title
                                    </label>
                                    <input
                                         ref={(input) => (titleRef = input)}
                                        class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        type="text"
                                        id="job-title"
                                        name="job-title"
                                        placeholder="Frontend Developer"
                                        autofocus
                                        defaultValue={Jobdetails?.position}
                                    />
                                </div>

                                <div class="w-full">
                                    <label
                                        class="mb-3 block text-black dark:text-white"
                                        for="apply-link"
                                    >
                                        Salary
                                    </label>
                                    <input
                                        ref={(input) => (salaryRef = input)}
                                        class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        type="texy"
                                        id="apply-link"
                                        name="apply-link"
                                        placeholder="35000-50000"
                                        defaultValue={Jobdetails?.salary}
                                    />
                                </div>
                            </div>
                            <div class="flex w-full justify-between  gap-4 ">
                                <div class="w-full md:w-1/2   md:mb-0 ">
                                    <label for="company" class="mb-3 block text-black dark:text-white">
                                        Company
                                    </label>
                                    <input
                                          ref={(input) => (companyRef = input)}
                                        type="text"
                                        class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        id="company"
                                        name="company"
                                        placeholder="ABC LTD."
                                        defaultValue={Jobdetails?.company}
                                    />
                                </div>

                                <div class="w-full md:w-1/2 mb-4 md:mb-0">
                                    <label
                                        class="mb-3 block text-black dark:text-white"
                                        for="job-type"
                                    >
                                        Category
                                    </label>
                                    <div class="relative">
                                        <select
                                            class="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                                            id="job-type"
                                            name="job-type"

                                            ref={(input) => (categoryRef = input)}
                                            >
                                                <option disabled selected> Chose Category Type</option>
                                                <option value="Onsite" selected={Jobdetails?.category === "Onsite"}>Onsite</option>
                                                <option value="Remote" selected={Jobdetails?.category === "Remote"}>Remote</option>
                                                <option value="Hybrid" selected={Jobdetails?.category === "Hybrid"}>Hybrid</option>
                                        </select>

                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg
                                                class="fill-current h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="md:flex md:justify-between gap-4 ">
                                <div class="w-full md:w-1/2 mb-4 md:mb-0">
                                    <label
                                        class="mb-3 block text-black dark:text-white"
                                        for="job-type"
                                    >
                                        Job Type
                                    </label>
                                    <div class="relative">
                                        <select
                                            class="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                                            id="job-type"
                                            name="job-type"

                                            ref={(input) => (jobtypeRef = input)}
                                            >
                                                <option disabled selected> Chose Job Type</option>
                                                <option value="Fulltime" selected={Jobdetails?.type === "Fulltime"} >Full time</option>
                                                <option value="Parttime" selected={Jobdetails?.type === "Parttime"}>Part time</option>
                                                <option value="Internship" selected={Jobdetails?.type === "Internship"}>Internship</option>
                                                <option value="Contractual" selected={Jobdetails?.type === "Contractual"}>Contractual</option>
                                                <option value="Freelance" selected={Jobdetails?.type === "Freelance"}>Freelance</option>
                                        </select>

                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg
                                                class="fill-current h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full md:w-1/2  md:mb-0">
                                    <label
                                        for="location"
                                        class="mb-3 block text-black dark:text-white"
                                    >
                                        Experience
                                    </label>
                                    <div class="relative">
                                        <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                                        ref={(input) => (experienceRef = input)}
                                        >
                                            <option disabled selected> Chose Experience Type</option>
                                            <option value="Entry" selected={Jobdetails?.experience === "Entry"}>Entry (0-2 Years)</option>
                                            <option value="Intermediate" selected={Jobdetails?.experience === "Intermediate"}>Intermediate (3-5 Years)</option>
                                            <option value="Expert" selected={Jobdetails?.experience === "Expert"}>Expert (5 or Higher)</option>
                                        </select>
                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg
                                                class="fill-current h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between gap-4 ">
                                <div class=" w-full">
                                    <label
                                        class="mb-3 block text-black dark:text-white"
                                        for="apply-link"
                                    >
                                        Link to apply
                                    </label>
                                    <input
                                          ref={(input) => (linktoRef = input)}
                                        class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        type="text"
                                        id="apply-link"
                                        name="apply-link"
                                        placeholder="https://www.djangoproject.com/apply"
                                        defaultValue={Jobdetails?.link}
                                    />
                                </div>
                                <div class=" w-full">
                                    <label
                                        class="mb-3 block text-black dark:text-white"
                                        for="apply-link"
                                    >
                                        Deadline Date
                                    </label>
                                    <input
                                           ref={(input) => (dateRef = input)}
                                        class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        type="date"
                                        id="apply-link"
                                        name="apply-link"
                                        placeholder="https://www.djangoproject.com/apply"
                                        defaultValue={moment(Jobdetails?.deadlineDate).format('YYYY-MM-DD')}
                                    />
                                </div>
                            </div>
                            <div class="flex w-full justify-between  gap-4 ">
                                <div class="w-full md:w-full   md:mb-0 ">
                                    <label for="company" class="mb-3 block text-black dark:text-white">
                                        Location
                                    </label>
                                    <input
                                          ref={(input) => (locaitonRef = input)}
                                        type="text"
                                        class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        id="location"
                                        name="location"
                                        placeholder="Kumira, Chattogram"
                                        defaultValue={Jobdetails?.location}
                                    />
                                </div>
                            </div>
                            <button  onClick={onjobUpdate} className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default UpdateModel
