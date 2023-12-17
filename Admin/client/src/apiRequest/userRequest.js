import axios from "axios";
import { store } from "../redux/store/store";
import { onChangeInput, resetFormInput, setAdmin, setAdminTotal, setAlumni, setAlumniTotal, setDetails, setLoading, setUser, setUserTotal } from "../redux/state/userSlice";
import { ErrorToast, SuccessToast } from "../helper/formHelper";

import { getToken } from "../helper/sessionHelper.js";
const BaseURL = "http://localhost:8081/api/user"
// const BaseURL = "https://admin-iiuc-alumni.onrender.com/api/user"
const AxiosHeader = { headers: { "token": getToken() } }

export const alumniCreateRequest = (data) => {
    let URL = BaseURL + "/addAlumni";
    return axios.post(URL, data, AxiosHeader).then((res) => {
        if (res.status === 200) {
            SuccessToast("Alumni has been Created")
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

export const adminCreateRequest = (data) => {
    let URL = BaseURL + "/addAdmin";
    return axios.post(URL, data, AxiosHeader).then((res) => {
        if (res.status === 200) {
            SuccessToast("Admin has been Created")
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

export const alumniListRequest = async (pageNo, perPage, searchKey) => {
    try {
        store.dispatch(setLoading(true))
        let url = BaseURL + `/alumniList?pageNo=${pageNo}&perPage=${perPage}&searchKey=${searchKey}`;
        const result = await axios.get(url);
        store.dispatch(setLoading(false))
        if (result.status === 200) {
            if (result.data.data[0].Row.length > 0) {
                store.dispatch(setAlumni(result.data.data[0].Row))
                store.dispatch(setAlumniTotal(result.data.data[0].Total[0].total))
            } else {
                store.dispatch(setAlumni([]))
                store.dispatch(setAlumniTotal(0))
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

export const studentListRequest = async (pageNo, perPage, searchKey) => {
    try {
        store.dispatch(setLoading(true))
        let url = BaseURL + `/studentList?pageNo=${pageNo}&perPage=${perPage}&searchKey=${searchKey}`;
        const result = await axios.get(url, AxiosHeader);
        store.dispatch(setLoading(false))

        if (result.status === 200) {
            if (result.data.data[0].Row.length > 0) {
                store.dispatch(setUser(result.data.data[0].Row))
                store.dispatch(setUserTotal(result.data.data[0].Total[0].total))
            } else {
                store.dispatch(setUser([]))
                store.dispatch(setUserTotal(0))
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

export const adminListRequest = async (pageNo, perPage, searchKey) => {
    try {
        store.dispatch(setLoading(true))
        let url = BaseURL + `/adminList?pageNo=${pageNo}&perPage=${perPage}&searchKey=${searchKey}`;
        const result = await axios.get(url, AxiosHeader);
        store.dispatch(setLoading(false))

        if (result.status === 200) {
            if (result.data.data[0].Row.length > 0) {
                store.dispatch(setAdmin(result.data.data[0].Row))
                store.dispatch(setAdminTotal(result.data.data[0].Total[0].total))
            } else {
                store.dispatch(setAdmin([]))
                store.dispatch(setAdminTotal(0))
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

export const userDetailsById = async (id) => {
    try {
        let url = BaseURL + "/details/" + id;
        const result = await axios.get(url, AxiosHeader);
        if (result.status === 200) {
            if (result.data.data.length > 0) {
                store.dispatch(onChangeInput({ name: "firstname", value: result.data.data[0].firstname }));
                store.dispatch(onChangeInput({ name: "lastname", value: result.data.data[0].lastname }));
                store.dispatch(onChangeInput({ name: "email", value: result.data.data[0].email }));
                store.dispatch(onChangeInput({ name: "studentId", value: result.data.data[0].studentId }));
                store.dispatch(onChangeInput({ name: "position", value: result.data.data[0].position }));
                store.dispatch(onChangeInput({ name: "company", value: result.data.data[0].company }));
                store.dispatch(onChangeInput({ name: "degree", value: result.data.data[0].degree }));
                store.dispatch(onChangeInput({ name: "dept", value: result.data.data[0].dept }));
                store.dispatch(onChangeInput({ name: "batch", value: result.data.data[0].batch }));
                store.dispatch(onChangeInput({ name: "gender", value: result.data.data[0].gender }));
                store.dispatch(onChangeInput({ name: "phone", value: result.data.data[0].phone }));
                store.dispatch(onChangeInput({ name: "address", value: result.data.data[0].address }));
                store.dispatch(onChangeInput({ name: "photo", value: result.data.data[0].photo }));
                return true;
            } else {
                store.dispatch(resetFormInput())
                ErrorToast("No data found.")
                return false
            }
        } else {
            ErrorToast("Something went wrong.")
            return false
        }
    } catch (error) {
        ErrorToast("Something went wrong.")
        return false
    }
}
export const studentDetailsById = async (id) => {
    try {
        let url = BaseURL + "/details/" + id;
        const result = await axios.get(url, AxiosHeader);

        if (result.status === 200) {
            if (result.data.data.length > 0) {
                store.dispatch(setDetails(result.data.data[0]))

            } else {
                store.dispatch(setDetails(""))
                ErrorToast("No data found.")
            }
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {
        ErrorToast("Something went wrong.")
    }
}
export const adminDetailsById = async (id) => {
    try {
        let url = BaseURL + "/details/" + id;
        const result = await axios.get(url, AxiosHeader);

        if (result.status === 200) {
            if (result.data.data.length > 0) {
                store.dispatch(setDetails(result.data.data[0]))

            } else {
                store.dispatch(setDetails(""))
                ErrorToast("No data found.")
            }
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {
        ErrorToast("Something went wrong.")
    }
}




export const updateUser = (formData, id) => {
    let URL = BaseURL + "/" + id;
    return axios.put(URL, formData, AxiosHeader).then((res) => {
        if (res.status === 200) {
            SuccessToast("Alumni Details Updated")
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

export const deleteUserById = async (id) => {
    try {
        let url = BaseURL + "/" + id;
        const result = await axios.delete(url, AxiosHeader);
        if (result.status === 200) {
            SuccessToast("User Deleted! ")
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {

        ErrorToast("Something went wrong.")
    }
}

export const countRequest = async () => {
    try {
        let url = BaseURL + "/count";
        const result = await axios.get(url, AxiosHeader);
        if (result.status === 200) {
            return result.data
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {
        ErrorToast("Something went wrong.")
    }
}
