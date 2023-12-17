import axios from "axios";
import moment from 'moment';
import { store } from "../redux/store/store";
import { ErrorToast, SuccessToast } from "../helper/formHelper";
import { onChangeInput, resetFormInput, setEvent, setEventDetails, setEventTotal, setLoading } from "../redux/state/eventSlice";
import { getToken } from "../helper/sessionHelper.js";
// const BaseURL = "http://localhost:8081/api/event"
const BaseURL = "https://admin-iiuc-alumni.onrender.com/api/event"
const AxiosHeader = { headers: { "token": getToken() } }

export const eventCreateRequest = (formData) => {
    let URL = BaseURL + "/";
    return axios.post(URL, formData, AxiosHeader).then((res) => {
        if (res.status === 200) {
            SuccessToast("Event has been Created")
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

export const eventDetailsById = async (id) => {
    try {
        let url = BaseURL + "/details/" + id;
        const result = await axios.get(url);
        if (result.status === 200) {
            if (result.data.data.length > 0) {
                store.dispatch(onChangeInput({ name: "title", value: result.data.data[0].title }));
                store.dispatch(onChangeInput({ name: "topic", value: result.data.data[0].topic }));
                store.dispatch(onChangeInput({ name: "venue", value: result.data.data[0].venue }));
                store.dispatch(onChangeInput({ name: "link", value: result.data.data[0].link }));
                store.dispatch(onChangeInput({ name: "date", value: result.data.data[0].date }));
                store.dispatch(onChangeInput({ name: "startTime", value: result.data.data[0].startTime }));
                store.dispatch(onChangeInput({ name: "endTime", value: result.data.data[0].endTime }));
                store.dispatch(onChangeInput({ name: "eventWebsite", value: result.data.data[0].eventWebsite }));
                store.dispatch(onChangeInput({ name: "openTo", value: result.data.data[0].openTo }));
                store.dispatch(onChangeInput({ name: "desc", value: result.data.data[0].desc }));
            } else {
                store.dispatch(resetFormInput())
                ErrorToast("No data found.")
            }
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {
        ErrorToast("Something went wrong.")
    }
}

export const updateEvent = (formData, id) =>{
    let URL = BaseURL + "/"+id;
    return axios.put(URL, formData, AxiosHeader).then((res) => {
        if (res.status === 200) {
            SuccessToast("Event Details Updated")
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

export const eventListRequest = async (pageNo, perPage, searchKey) => {
    try {
        store.dispatch(setLoading(true))
        let url = BaseURL + `/list?pageNo=${pageNo}&perPage=${perPage}&searchKey=${searchKey}`;
        const result = await axios.get(url);
        store.dispatch(setLoading(false))
        if (result.status === 200) {
            if (result.data.data[0].Row.length > 0) {
                store.dispatch(setEvent(result.data.data[0].Row))
                store.dispatch(setEventTotal(result.data.data[0].Total[0].total))
            } else {
                store.dispatch(setEvent([]))
                store.dispatch(setEventTotal(0))
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

export const deleteEventById = async (id) => {
    try {
        let url = BaseURL + "/" + id;
        const result = await axios.delete(url, AxiosHeader);
        if (result.status === 200) {
            SuccessToast("Event Deleted!")
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {

        ErrorToast("Something went wrong.")
    }
}

