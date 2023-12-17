import React, { Fragment, useRef } from 'react'
import { ErrorToast, IsEmpty, getBase64 } from '../../helper/formHelper';
import { newsCreateRequest } from '../../apiRequest/newsRequest';
import { useNavigate } from 'react-router-dom';

const CreateNews = () => {
  let topicRef, newFromRef, newsLinkRef, descRef, userImgRef, userImgView = useRef()
  const navigate = useNavigate()

  const previewImage = () => {
    let ImgFile = userImgRef.files[0];
    getBase64(ImgFile).then((base64Img) => {
      userImgView.src = base64Img;
    })
  }

  const onCreate = async () =>{
    if (IsEmpty(topicRef.value)) {
      ErrorToast("Topic required !");
    } else if (IsEmpty(newFromRef.value)) {
      ErrorToast("News source Required !");
    } else if (IsEmpty(newsLinkRef.value)) {
      ErrorToast("News Link Required !");
    } else if (IsEmpty(descRef.value)) {
      ErrorToast("News description Required !");
    }else if (!userImgRef.files[0]) {
      ErrorToast("Image is Required !");
    }else{
        const formData = new FormData()
        formData.append('topic', topicRef.value)
        formData.append('newsFrom', newFromRef.value)
        formData.append('newsLink', newsLinkRef.value)
        formData.append('smallDesc', descRef.value)
        formData.append('photo', userImgRef.files[0])
        const result = await newsCreateRequest(formData)
        if(result) navigate('/news/newslist')
      }
  }

  return (
    <Fragment>
      <div class="w-full max-w-xl mx-auto">
        <div className='space-y-4'>
          <h1 class="text-xl font-semibold text-black dark:text-white">Create New News</h1>

          <div class="space-y-2 mt-2 mx-3">
            <div className="flex justify-between gap-4 ">
              <div class=" w-full">
                <label
                  class="mb-1 block text-black dark:text-white"
                  for="job-topic"
                >
                  Topic
                </label>
                <input
                   ref={(input) => (topicRef = input)}
                  class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  type="text"
                  id="topic"
                  name="topic"
                  placeholder="ex: IIUC Class of 2023 Commencement Highlights"
                  autoFocus
                />
              </div>
            </div>
            <div className="flex justify-between gap-4 ">
              <div class=" w-full">
                <label
                  class="mb-1 block text-black dark:text-white"
                  for="source"
                >
                  Source
                </label>
                <input
                   ref={(input) => (newFromRef = input)}
                  class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  type="text"
                  id="source"
                  name="source"
                  placeholder="ex: Prothom Alo"
                />
              </div>
              <div class=" w-full">
                <label
                  class="mb-1 block text-black dark:text-white"
                  for="link"
                >
                  News Link
                </label>
                <input
                   ref={(input) => (newsLinkRef = input)}
                  class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  type="text"
                  id="link"
                  name="link"
                  placeholder="https://www.prothomalo.com/news"
                />
              </div>
            </div>
            <div>
              <label
                for="desc"
                class="mb-1 block text-black dark:text-white"
              >
                Description (100 words)
              </label>
              <textarea
                 ref={(input) => (descRef = input)}
                id="desc"
                rows="3"
                class="w-full resize-none rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <div
              id="FileUpload"
              className="relative block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
            >
              <img class="w-full absolute top-0 left-0 h-full z-50 object-fill" ref={(input) => userImgView = input} alt="" />
              <input
                type="file"
                accept="image/*"
                onChange={previewImage}
                ref={(input) => userImgRef = input}
                className="absolute inset-0 z-[100] m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
              />
              <div className="flex flex-col -z-1 items-center justify-center space-y-1">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                      fill="#3C50E0"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                      fill="#3C50E0"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                      fill="#3C50E0"
                    />
                  </svg>
                </span>
                <p>
                  <span className="text-primary">Click to upload</span>
                </p>
                <p className="mt-1.5">JPG, JPEG, PNG or WEBP</p>
                <p>(max, 800 X 800px)</p>
              </div>
            </div>
            <button onClick={onCreate} className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
              Create
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CreateNews