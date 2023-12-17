import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
    name: 'event',
    initialState:{
        loading:false,
        pageNo: 1,
        eventList: [],
        Total: 0,
        eventId:null,
        FormValue: {
            title: '',
            topic: '',
            venue: '',
            link:'',
            date:'',
            startTime:'',
            endTime:'',
            eventWebsite:'',
            openTo:[],
            desc:''
        }
    },
    reducers:{
        setLoading: (state, action)=>{
            state.loading = action.payload
        },
        setPageNo: (state, action)=>{
            state.pageNo = action.payload
        },
        setEvent: (state, action)=>{
            state.eventList = action.payload
        },
        setEventTotal: (state, action)=>{
            state.Total = action.payload
        },
        setEventId:(state, action)=>{
            state.eventId = action.payload
        },
        onChangeInput: (state, action)=>{
            state.FormValue[`${action.payload.name}`] = action.payload.value
        },
        resetFormInput: (state, action)=>{
            Object.keys(state.FormValue).forEach((i)=> i=='openTo' ? state.FormValue[i] = [] : state.FormValue[i] = '')
        },
        setOpenTo:(state, action)=>{
            state.FormValue.openTo = action.payload
        }
    }
})

export const { setLoading, setPageNo, setEvent, setEventTotal, setEventId, setEventDetails, onChangeInput, resetFormInput, setOpenTo } = eventSlice.actions
export default eventSlice.reducer