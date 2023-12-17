import React, { Fragment, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { ErrorToast, IsEmpty } from '../../helper/formHelper';
import { Jobcreaterequest } from '../../apiRequest/JobRequest';

const CreateJob = () => {

    let titleRef, salaryRef, linktoRef, jobtypeRef, locaitonRef, experienceRef, descriptionRef, companyRef, dateRef, categoryRef = useRef();
    let navigate = useNavigate();

    const onCreate = () => {
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
            ErrorToast("experience is Required !");
        } else if (IsEmpty(company)) {
            ErrorToast("Company Required !");
        } else if (IsEmpty(category)) {
            ErrorToast("Category is  Required !");
        } else {
            if (Jobcreaterequest(title, salary, linkto, date, jobtype, location, company, experience, category)) {

            } else navigate("/profile");
        }
    };
    return (
        <Fragment>
            <div class="w-full max-w-xl mx-auto">
                <div className='space-y-4'>
                    <h3 className="text-xl font-semibold text-black dark:text-white">
                        Create new job
                    </h3>

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
                                    ref={(input) => (titleRef = input)}
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    type="text"
                                    id="job-title"
                                    name="job-title"
                                    placeholder="Frontend Developer"
                                    autofocus
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
                                        <option disabled selected value="">Select a Category</option>
                                        <option value="Onsite">Onsite</option>
                                        <option value="Remote">Remote</option>
                                        <option value="Hybrid">Hybrid</option>
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
                                        <option disabled selected value="">Select a Job Type</option>
                                        <option value="Fulltime">Full time</option>
                                        <option value="Parttime">Part time</option>
                                        <option value="Internship">Internship</option>
                                        <option value="Contractual">Contractual</option>
                                        <option value="Freelance">Freelance</option>
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
                                        <option disabled selected value="">Select a Experience</option>
                                        <option value="Entry">Entry (0-2 Years)</option>
                                        <option value="Intermediate">Intermediate (3-5 Years)</option>
                                        <option value="Expert">Expert (5 or Higher)</option>
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
                                />
                            </div>


                        </div>
                    </div>
                    <div>
                        <button onClick={onCreate} className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                            Create job
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CreateJob
