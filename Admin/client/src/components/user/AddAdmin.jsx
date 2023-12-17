import React, { Fragment, useEffect } from 'react'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ErrorToast, IsEmail, IsEmpty, getBase64 } from '../../helper/formHelper'
import { adminCreateRequest } from '../../apiRequest/userRequest'
import { onChangeInput, resetFormInput } from '../../redux/state/userSlice'
import { store } from '../../redux/store/store'

const AddAdmin = () => {
    let userImgRef, userImgView = useRef()
    let navigate = useNavigate()
    const FormValue = useSelector((state) => (state.user.FormValue))
    const previewImage = () => {
        let ImgFile = userImgRef.files[0];
        getBase64(ImgFile).then((base64Img) => {
          userImgView.src = base64Img;
        })
    }

    useEffect(()=>{
      store.dispatch(resetFormInput())
    },[])

    const validation = () =>{
        if (IsEmpty(FormValue.firstname)) {
            ErrorToast("First Name required !");
          } else if (IsEmpty(FormValue.lastname)) {
            ErrorToast("Last Name Required !");
          } else if (IsEmail(FormValue.email)) {
            ErrorToast("Invalid email address.");
          } else if (IsEmpty(FormValue.phone)) {
            ErrorToast("Contact No is Required !");
          } else if (IsEmpty(FormValue.address)) {
            ErrorToast("Address is Required !");
          }else if (!userImgRef.files[0]) {
            ErrorToast("Image Required !");
          }else return true

          return false;
      }

    const onCreate = async () =>{
        if (validation()){
            const formData = new FormData()
            formData.append('firstname', FormValue.firstname)
            formData.append('lastname', FormValue.lastname)
            formData.append('email', FormValue.email)
            formData.append('phone', FormValue.phone)
            formData.append('address', FormValue.address)
            formData.append('photo', userImgRef.files[0])
            const result = await adminCreateRequest(formData)
            if(result) navigate('/users/adminlist')
          }
      }
  return (
    <Fragment>
            <div className='w-full max-w-2xl mx-auto'>
                <div class="space-y-3 md:space-y-4">
                    <h1 class="text-xl font-semibold text-black dark:text-white">
                        Add New Admin
                    </h1>
                    <div class="profile flex justify-center ">
                        <img class="w-36 h-36 rounded-full object-fill" ref={(input) => userImgView = input} src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" />
                        <div class="w-36 h-36 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                            <img class="hidden absolute group-hover:block w-12" for="file-input" src="https://www.svgrepo.com/show/33565/upload.svg" alt="" />
                            <input
                                type="file"
                                id='file-input'
                                className='absolute opacity-0'
                                onChange={previewImage}
                            ref={(input) => userImgRef = input}
                            />
                        </div>
                    </div>
                    <div class="space-y-2 md:space-y-3">
                        <div className="flex flex-col lg:flex-row justify-between gap-4">
                            <div className="w-full lg:w-1/2">
                                <label for="firstname" class="mb-3 block text-black dark:text-white">Firstname</label>
                                <input type="text"  id="firstname" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                     onChange={(e) => { store.dispatch(onChangeInput({ name: "firstname", value: e.target.value })) }} 
                                     value={FormValue.firstname}
                                    placeholder="e.g. Jhon" required />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <label for="lname" class="mb-3 block text-black dark:text-white">Lastname</label>
                                <input type="text" id="lastname" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                     onChange={(e) => { store.dispatch(onChangeInput({ name: "lastname", value: e.target.value })) }}
                                      value={FormValue.lastname}
                                    placeholder="e.g. Doe" required />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-4">
                            <div className="w-full lg:w-1/2">
                                <label for="email" class="mb-3 block text-black dark:text-white">Email</label>
                                <input type="email" name="email" id="email"
                                     onChange={(e) => { store.dispatch(onChangeInput({ name: "email", value: e.target.value })) }}
                                      value={FormValue.email}
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" placeholder="name@company.com" required="" />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <label for="phone" class="mb-3 block text-black dark:text-white">Contact No</label>
                                <input type="text" name="phone" id="phone" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                     onChange={(e) => { store.dispatch(onChangeInput({ name: "phone", value: e.target.value })) }} 
                                     value={FormValue.phone}
                                    placeholder="e.g. 01818181818" required="" />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-4">
                            <div className="w-full">
                                <label for="address" class="mb-3 block text-black dark:text-white">Address</label>
                                <input type="text" name="address" id="address" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                     onChange={(e) => { store.dispatch(onChangeInput({ name: "address", value: e.target.value })) }} 
                                     value={FormValue.address}                                    
                                     placeholder="e.g. IIUC, Kumira, Chattogram" required />
                            </div>
                        </div>
                        <button
                            type="submit"
                            onClick={onCreate}
                            className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                        >
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
  )
}

export default AddAdmin
