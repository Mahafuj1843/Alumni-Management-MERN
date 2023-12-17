import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
    name: 'news',
    initialState:{
        loading:false,
        pageNo: 0,
        newsList: [],
        Total: 0,
        newsId:null,
        newsDetails:null
    },
    reducers:{
        setLoading: (state, action)=>{
            state.loading = action.payload
        },
        setPageNo: (state, action)=>{
            state.pageNo = action.payload
        },
        setNews: (state, action)=>{
            state.newsList = action.payload
        },
        setNewsTotal: (state, action)=>{
            state.Total = action.payload
        },
        setNewsId:(state, action)=>{
            state.newsId = action.payload
        },
        setNewsDetails:(state, action)=>{
            state.newsDetails = action.payload
        }
    }
})

export const { setLoading, setPageNo, setNews, setNewsTotal, setNewsId, setNewsDetails} = newsSlice.actions
export default newsSlice.reducer