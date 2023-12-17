import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
    return (
        <Fragment>
            <section >
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                    <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img id="black" class="w-48" src="https://i.ibb.co/7Ghmzw7/Screenshot-2023-08-07-124356-removebg-preview.png" alt="" />
                    </a>
                    <div className="w-full bg-slate-100 rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="mb-3 block text-xl font-bold text-black dark:text-white">
                                Forgot Your Password?
                            </h1>
                            <p class="mb-3 block text-black dark:text-white">
                                We get it, stuff happens. Just enter your email address below and we'll send you a
                                mail to reset your password.
                            </p>
                            <div className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" class="mb-3 block font-semibold text-black dark:text-white">Your email</label>
                                    <input
                                        //ref={(i) => email = i} 
                                        type="email" name="email" id="email"  class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        placeholder="name@company.com" required="" />
                                </div>
                                <button
                                    //onClick={onSend}
                                    type="submit" className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">Send Password Reset Mail</button>
                                <p class="mb-3 block text-black dark:text-white">
                                    Going back to signin? <Link to="/auth/signin" className="font-medium text-[#2C1654] hover:underline">Sign In</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default ForgetPassword