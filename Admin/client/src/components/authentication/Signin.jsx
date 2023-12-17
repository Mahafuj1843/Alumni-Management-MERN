import React, { useRef } from 'react'
import { useState } from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { ErrorToast, IsEmail, IsPassword } from '../../helper/formHelper';
import { LoginRequest } from '../../apiRequest/authRequest';

const Signin = () => {


    const [show, setShow] = useState(false)
  let emailRef, passwordRef = useRef()

  const onLogin = () => {
    let email = emailRef.value;
    let password = passwordRef.value;

    if (IsEmail(email)) {
      ErrorToast("Invalid email address.")
    }
    else if (IsPassword(password)) {
      ErrorToast("Password must be six characters, at least one letter and one number !")
    }
    else {
        LoginRequest(email, password).then((result) => {
        if (result) window.location.href = "/"
      })
    }
  }
    return (
        <Fragment>
            <section className="">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 overflow-auto">
                    <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img id="black" class="w-52" src="https://i.ibb.co/7Ghmzw7/Screenshot-2023-08-07-124356-removebg-preview.png" alt="" />

                    </a>
                    <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="mb-3 block text-xl font-bold justify-center text-black dark:text-white">
                                Sign in to your account
                            </h1>
                            <div className="space-y-3 md:space-y-6">
                                <div>
                                    <label for="email" className="mb-3 block text-md font-semibold  text-black dark:text-white">Your email</label>
                                    <input
                                        ref={(i) => emailRef = i}
                                        type="email" name="email" id="email"  class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label for="password" className="mb-3 block text-md font-semibold  text-black dark:text-white">Password</label>
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 right-0 flex items-center px-2">
                                            <label onClick={() => setShow(!show)} className="hover:bg-gray-200 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label" for="toggle">
                                                {show ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-eye-slash" viewBox="0 0 16 16">
                                                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" /> <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" /> <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                                    </svg>
                                                    :
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-eye" viewBox="0 0 16 16">
                                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" /> <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                    </svg>
                                                }
                                            </label>
                                        </div>
                                        <input
                                             ref={(i) => passwordRef = i}
                                            type={show ? "text" : "password"} name="password" id="password" placeholder="••••••••"  class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" required="" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="checkbox w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#13c6cf] " required="" />
                                        </div>
                                        <div className="ml-1 md:ml-3 text-sm">
                                            <label for="remember" className="mb-3 block text-black dark:text-white">Remember me</label>
                                        </div>
                                    </div>
                                    <Link to="/forgetpass" className="mb-3 block text-black dark:text-white">Forgot password?</Link>
                                </div>
                                <button
                                    onClick={onLogin} 
                                    type="submit" className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Signin