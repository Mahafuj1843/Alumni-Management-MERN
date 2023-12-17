import axios from "axios";
import { store } from "../redux/store/store";
import { setLoading, setNews, setNewsDetails, setNewsTotal } from "../redux/state/newsSlice";
 import { getToken } from "../helper/sessionHelper.js";
import { ErrorToast, SuccessToast } from "../helper/formHelper";
const BaseURL = "http://localhost:8081/api/news"
// const BaseURL = "https://admin-iiuc-alumni.onrender.com/api/news"
 const AxiosHeader = { headers: { "token": getToken() } }

 export const newsCreateRequest = (data) => {
    let URL = BaseURL + "/";
    return axios.post(URL, data, AxiosHeader).then((res) => {
        if (res.status === 200) {
            SuccessToast("News has been Created")
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        if (err.response.data.status === 404) {
            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}

export const newsDetailsById = async (id) => {
    try {
        let url = BaseURL + "/details/" + id;
        const result = await axios.get(url,AxiosHeader);
        if (result.status === 200) {
            if (result.data.data.length > 0) {
                store.dispatch(setNewsDetails(result.data.data[0]))
            } else {
                store.dispatch(setNewsDetails(null))
                ErrorToast("No data found.")
            }
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {
        ErrorToast("Something went wrong.")
    }
}

export const updateNews = (formData, id) =>{
    let URL = BaseURL + "/"+id;
    return axios.put(URL, formData,AxiosHeader).then((res) => {
        if (res.status === 200) {
            SuccessToast("News Details Updated.")
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        if (err.response.data.status === 401) {
            ErrorToast(err.response.data.message)
            return false;
        } else if (err.response.data.status === 404) {
            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}

export const deleteNewsById = async (id) => {
    try {
        let url = BaseURL + "/" + id;
        const result = await axios.delete(url, AxiosHeader);
        if (result.status === 200) {
            SuccessToast("News Deleted!")
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {

        ErrorToast("Something went wrong.")
    }
}

export const newsListRequest = async (pageNo, perPage, searchKey) => {
    try {
        store.dispatch(setLoading(true))
        let url = BaseURL + `/list?pageNo=${pageNo}&perPage=${perPage}&searchKey=${searchKey}`;
        const result = await axios.get(url);
        store.dispatch(setLoading(false))
        if (result.status === 200) {
            if (result.data.data[0].Row.length > 0) {
                store.dispatch(setNews(result.data.data[0].Row))
                store.dispatch(setNewsTotal(result.data.data[0].Total[0].total))
            } else {
                store.dispatch(setNews([]))
                store.dispatch(setNewsTotal(0))
                ErrorToast("No data found.")
            }
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {
        store.dispatch(setLoading(false))
        ErrorToast("Something went wrong.")
    }
}

