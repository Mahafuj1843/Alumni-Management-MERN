import React, { Fragment, useEffect, useRef } from 'react'
import { ErrorToast, IsEmpty, getBase64 } from '../../helper/formHelper';
import { useSelector } from 'react-redux';
import { newsDetailsById, updateNews } from '../../apiRequest/newsRequest';

const NewsUpdateModel = ({ setShowUpdateModal, setUpdate }) => {
  let topicRef, newFromRef, newsLinkRef, descRef, userImgRef, userImgView = useRef()
  let selcetNewId = useSelector((state)=>state.news.newsId)
  let newsDetails = useSelector((state)=>state.news.newsDetails)

  const previewImage = () => {
    let ImgFile = userImgRef.files[0];
    getBase64(ImgFile).then((base64Img) => {
      userImgView.src = base64Img;
    })
  }

  useEffect(() => {
    (async () => {
        await newsDetailsById(selcetNewId);
    })();
  }, [selcetNewId])

  const onUpdate = async () =>{
    if (IsEmpty(topicRef.value)) {
      ErrorToast("Topic required !");
    } else if (IsEmpty(newFromRef.value)) {
      ErrorToast("News source Required !");
    } else if (IsEmpty(newsLinkRef.value)) {
      ErrorToast("News Link Required !");
    } else if (IsEmpty(descRef.value)) {
      ErrorToast("News description Required !");
    }else{
        const formData = new FormData()
        formData.append('topic', topicRef.value)
        formData.append('newsFrom', newFromRef.value)
        formData.append('newsLink', newsLinkRef.value)
        formData.append('smallDesc', descRef.value)
        if(userImgRef.files[0]) formData.append('photo', userImgRef.files[0])
        // else formData.append('photo', "")
        const result = await updateNews(formData, selcetNewId)
        if(result) {
          setShowUpdateModal(false)
          setUpdate(true)
        }
      }
  }

  return (
    <Fragment>
      <div
        className="flex justify-center items-center overflow-x-hidden no-scrollbar fixed inset-0 z-999 outline-none focus:outline-none"
      >
        <div onClick={() => setShowUpdateModal(false)} className="fixed h-full w-full left-0 top-0 bg-black bg-opacity-50 z-[-1]"></div>
        <div className="relative left-24 w-1/2 h-fit">
          <div className="p-3 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between pb-1 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Update News
              </h3>
              <button
                className="p-3 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none rounded-full hover:bg-gray-2"
                onClick={() => setShowUpdateModal(false)}                  >
                <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.8913 9.99599L19.5043 2.38635C20.032 1.85888 20.032 1.02306 19.5043 0.495589C18.9768 -0.0317329 18.141 -0.0317329 17.6135 0.495589L10.0001 8.10559L2.38673 0.495589C1.85917 -0.0317329 1.02343 -0.0317329 0.495873 0.495589C-0.0318274 1.02306 -0.0318274 1.85888 0.495873 2.38635L8.10887 9.99599L0.495873 17.6056C-0.0318274 18.1331 -0.0318274 18.9689 0.495873 19.4964C0.717307 19.7177 1.05898 19.9001 1.4413 19.9001C1.75372 19.9001 2.13282 19.7971 2.40606 19.4771L10.0001 11.8864L17.6135 19.4964C17.8349 19.7177 18.1766 19.9001 18.5589 19.9001C18.8724 19.9001 19.2531 19.7964 19.5265 19.4737C20.0319 18.9452 20.0245 18.1256 19.5043 17.6056L11.8913 9.99599Z" fill=""></path></svg>
              </button>
            </div>
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
                    defaultValue={newsDetails?.topic}
                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
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
                    defaultValue={newsDetails?.newsFrom}
                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
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
                    defaultValue={newsDetails?.newsLink}
                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
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
                  defaultValue={newsDetails?.smallDesc}
                  id="desc"
                  rows="3"
                  class="w-full resize-none rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
              <div
                id="FileUpload"
                className="relative block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
              >
                <img class="w-full absolute top-0 left-0 h-full z-50 object-fill" src={newsDetails?.photo.url} ref={(input) => userImgView = input} alt="" />
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
              <button onClick={onUpdate} className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default NewsUpdateModel
