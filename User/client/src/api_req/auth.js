import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/formHelper";
import { getToken, getUserDetails, removeSessions, setToken, setUserDetails } from "../helper/sessionHelper.js";
import { setProfileDetails } from "../redux/state/profileslice";
import store from "../redux/store/store";
import { socket } from "../components/Layout/Header";
//  const BaseURL = "http://localhost:8081/api/auth"
const BaseURL = "https://iiuc-alumni.onrender.com/api/auth"
const AxiosHeader = { headers: { "token": getToken() } }

export const studentRegister = async (formData) => {
    let URL = BaseURL + "/register";
    return await axios.post(URL, formData).then((res) => {
        if (res.status === 200) {
            SuccessToast("Registration Successfull.")
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        if (err.response.data.status === 400) {
            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}

export const alumniRegister = async (formData) => {
    let URL = BaseURL + "/alumni/register";
    return await axios.post(URL, formData).then((res) => {
        if (res.status === 200) {
            SuccessToast("Registration Successfull.")
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        if (err.response.data.status === 400) {
            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}

export const LoginRequest = (email, password) => {
   
    let URL = BaseURL + "/login";
    let PostBody = { email: email, password: password }
    return axios.post(URL, PostBody).then((res) => {
        
        if (res.status === 200) {
            setToken(res.data.token)
            setUserDetails(res.data.data)
            SuccessToast("Login Successfull.")
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
     
        if (err.response.data.status === 400) {
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

export const Logout = async() =>{
    let URL = BaseURL + "/logout";

    return await axios.get(URL).then((res) => {
        if (res.status === 200) {
            socket.emit("logout", getUserDetails()._id)
            removeSessions()
            SuccessToast("Logout Successfull.")
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        ErrorToast("Something Went Wrong")
        return false;
    })
}

export const profileDetails = () =>{
    let URL = BaseURL + "/profile/details";
    return axios.get(URL,AxiosHeader).then((res) => {
 
        if (res.status === 200) {
            if (res.data.data ) {
                store.dispatch(setProfileDetails(res.data.data))
               
            } else {
                store.dispatch(setProfileDetails(""))
                ErrorToast("No data found.")
            }
            
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

export const updateProfile = (formData) =>{
    let URL = BaseURL + "/updateProfile";
    return axios.put(URL, formData, AxiosHeader).then((res) => {
        if (res.status === 200) {
            SuccessToast("Profile Details Updated")
            setUserDetails(res.data.data)
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

export const ForgetPasswordRequest = (email) =>{
    
    let URL = BaseURL + "/forgotPassword";
    let PostBody = { email: email }
    return axios.post(URL, PostBody).then((res) => {
       
        if (res.status === 200) {
            SuccessToast(res.data)
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
export const ResetPasswordRequest = (password, resetToken) =>{

    let PostBody = { password: password }
    let URL = BaseURL + "/resetPassword/"+resetToken;
    return axios.put(URL, PostBody).then((res) => {

        if (res.status === 200) {
            SuccessToast(res.data)
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


