import React, { Fragment, useRef } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ErrorToast, IsEmail, IsEmpty, getBase64 } from '../../helper/formHelper';
import { useSelector } from 'react-redux';
import { store } from '../../redux/store/store';
import { onChangeInput, resetFormInput } from '../../redux/state/userSlice';
import { useEffect } from 'react';
import { alumniCreateRequest, updateUser, userDetailsById } from '../../apiRequest/userRequest';

const AddAlumni = () => {
    let userImgRef, userImgView = useRef()
    let navigate = useNavigate()
    const params = useParams()
    const location = useLocation()
    const FormValue = useSelector((state) => (state.user.FormValue))
    const previewImage = () => {
        let ImgFile = userImgRef.files[0];
        getBase64(ImgFile).then((base64Img) => {
          userImgView.src = base64Img;
        })
    }

    useEffect(() => {
        (async () => {
          if (params.id) {
            await userDetailsById(params.id)
          } else {
            store.dispatch(resetFormInput())
          }
        })();
      }, [location])

    const validation = () =>{
        if (IsEmpty(FormValue.firstname)) {
            ErrorToast("First Name required !");
          } else if (IsEmpty(FormValue.lastname)) {
            ErrorToast("Last Name Required !");
          } else if (IsEmail(FormValue.email)) {
            ErrorToast("Invalid email address.");
          } else if (IsEmpty(FormValue.studentId)) {
            ErrorToast("Student Id Required !");
          }else if (IsEmpty(FormValue.dept)) {
            ErrorToast("Dept is Required !");
          } else if (IsEmpty(FormValue.batch)) {
            ErrorToast("Batch is Required !");
          }else if (IsEmpty(FormValue.position)) {
            ErrorToast("Position Name Required !");
          } else if (IsEmpty(FormValue.company)) {
            ErrorToast("Company is Required !");
          } else if (IsEmpty(FormValue.gender)) {
            ErrorToast("Gender is Required !");
          } else if (IsEmpty(FormValue.degree)) {
            ErrorToast("Degree is Required !");
          } else if (IsEmpty(FormValue.phone)) {
            ErrorToast("Contact No is Required !");
          } else if (IsEmpty(FormValue.address)) {
            ErrorToast("Address is Required !");
          }else return true

          return false;
      }
      const onCreate = async () =>{
        if (validation()){
            const formData = new FormData()
            formData.append('firstname', FormValue.firstname)
            formData.append('lastname', FormValue.lastname)
            formData.append('email', FormValue.email)
            formData.append('studentId', FormValue.studentId)
            formData.append('dept', FormValue.dept)
            formData.append('batch', FormValue.batch)
            formData.append('position', FormValue.position)
            formData.append('company', FormValue.company)
            formData.append('gender', FormValue.gender)
            formData.append('degree', FormValue.degree)
            formData.append('phone', FormValue.phone)
            formData.append('address', FormValue.address)
            formData.append('photo', userImgRef.files[0])
            const result = await alumniCreateRequest(formData)
            if(result) navigate('/users/alumni')
          }
      }

      const onUpdate = async () =>{
        if (validation()){
            const formData = new FormData()
            formData.append('firstname', FormValue.firstname)
            formData.append('lastname', FormValue.lastname)
            formData.append('email', FormValue.email)
            formData.append('studentId', FormValue.studentId)
            formData.append('dept', FormValue.dept)
            formData.append('batch', FormValue.batch)
            formData.append('position', FormValue.position)
            formData.append('company', FormValue.company)
            formData.append('gender', FormValue.gender)
            formData.append('degree', FormValue.degree)
            formData.append('phone', FormValue.phone)
            formData.append('address', FormValue.address)
            formData.append('photo', userImgRef.files[0])
            const result = await updateUser(formData, params.id)
            if(result) navigate('/users/alumni')
        }
      }

    return (
        <Fragment>
            <div className='w-full max-w-2xl mx-auto'>
                <div class="space-y-3 md:space-y-4">
                    <h1 class="text-xl font-semibold text-black dark:text-white">
                        {params.id ? "Update Alumni" : "Add New Alumni"}
                    </h1>

                    <div class="profile flex justify-center ">
                        <img class="w-36 h-36 rounded-full object-fill" ref={(input) => userImgView = input} src={(params.id || FormValue.photo?.url) ? FormValue?.photo?.url : "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="} alt="" />
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
                                <label for="studentId" class="mb-3 block text-black dark:text-white">Student ID</label>
                                <input type="text" name="studentId" id="studentId"
                                     onChange={(e) => { store.dispatch(onChangeInput({ name: "studentId", value: e.target.value })) }} 
                                     value={FormValue.studentId}
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    placeholder="e.g. C180000" required />
                            </div>
                        </div>
                        <div>


                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-4">
                            <div className="w-full lg:w-1/2">
                                <label for="position" class="mb-3 block text-black dark:text-white">Position</label>
                                <input type="text" name="position" id="position" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                     onChange={(e) => { store.dispatch(onChangeInput({ name: "position", value: e.target.value })) }}
                                     value={FormValue.position}
                                    placeholder="e.g. Sr. Software Engineer" required="" />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <label for="lname" class="mb-3 block text-black dark:text-white">Company Name</label>
                                <input type="text" name="lname" id="lname" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                     onChange={(e) => { store.dispatch(onChangeInput({ name: "company", value: e.target.value })) }} 
                                     value={FormValue.company}
                                    placeholder="e.g. ABC Limited" required />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-4">
                            <div className="w-full lg:w-1/2">
                                <label for="degree" class="mb-3 block text-black dark:text-white">Degree</label>
                                <select
                                    onChange={(e) => { store.dispatch(onChangeInput({ name: "degree", value: e.target.value })) }} 
                                     value={FormValue.degree}
                                    name='degree'
                                    id="degree" class="relative z-20 w-full rounded border border-stroke bg-transparent py-3 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                                    <option value="" disabled selected>Choose a Degree</option>
                                    <option value="Bachelors">Bachelors</option>
                                    <option value="Masters">Masters</option>
                                </select>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <label for="degree" class="mb-3 block text-black dark:text-white">Dept</label>
                                <select
                                     onChange={(e) => { store.dispatch(onChangeInput({ name: "dept", value: e.target.value })) }} 
                                     value={FormValue.dept}
                                    name='dept'
                                    id="degree" class="relative z-20 w-full rounded border border-stroke bg-transparent py-3 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                                    <option value="" disabled selected>Choose a Dept</option>
                                    <option value="CSE" >CSE</option>
                                    <option value="EEE" >EEE</option>
                                    <option value="ETE" >ETE</option>
                                    <option value="ETE" >CCS</option>
                                    <option value="EEE">EB</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-4">
                            <div className="w-full lg:w-1/2">
                                <label for="batch" class="mb-3 block text-black dark:text-white">Batch</label>
                                <input type="text" name="batch" id="batch" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                     onChange={(e) => { store.dispatch(onChangeInput({ name: "batch", value: e.target.value })) }} 
                                     value={FormValue.batch}
                                    placeholder="e.g. 47" required="" />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <label for="gender" class="mb-3 block text-black dark:text-white">Gender</label>
                                <select
                                     onChange={(e) => { store.dispatch(onChangeInput({ name: "gender", value: e.target.value })) }} 
                                     value={FormValue.gender}
                                    id="gender" class="relative z-20 w-full rounded border border-stroke bg-transparent py-3 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                                    <option value="" disabled selected>Select a Gender</option>
                                    <option value="Male" >Male</option>
                                    <option value="Female" >Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-4">
                            <div className="w-full lg:w-1/2">
                                <label for="phone" class="mb-3 block text-black dark:text-white">Contact No</label>
                                <input type="text" name="phone" id="phone" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                     onChange={(e) => { store.dispatch(onChangeInput({ name: "phone", value: e.target.value })) }} 
                                     value={FormValue.phone}
                                    placeholder="e.g. 01818181818" required="" />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <label for="address" class="mb-3 block text-black dark:text-white">Address</label>
                                <input type="text" name="address" id="address" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                     onChange={(e) => { store.dispatch(onChangeInput({ name: "address", value: e.target.value })) }} 
                                     value={FormValue.address}                                    
                                     placeholder="e.g. IIUC, Kumira, Chattogram" required />
                            </div>
                        </div>
                        <button
                            type="submit"
                            onClick={ params.id ? onUpdate : onCreate}
                            className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                        >
                            {params.id ? "Save" : "Create"}
                        </button>



                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AddAlumni