import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import toast from "react-hot-toast";

const readAll = createAsyncThunk(
    'read_one_chapter',
    async ({ manga_id }) => {
        try {
            let response = await axios.get("http://localhost:8000/chapters/all/" + manga_id)
            return {
                chapters: response.data.chapters,
                title: response.data.chapters[0]?.manga_id.title
            }
        } catch (error) {
            return {
                chapters: [],
                title: ""
            }
        }
    }
)
const deleteChapter = createAsyncThunk(
    'delete_one_chapter',
    async ({ _id, headers }) => {
        try {
            let response = await axios.delete("http://localhost:8000/chapters/" + _id, headers)
            // toast.success('Chapter deleted successfully')
            return { _id: _id }
        } catch (error) {
            if (error.response.data === 'Unauthorized') {
                // toast.error('You need to Login')
            } else {
                if (typeof error.response.data.message === 'string') {
                    // toast.error(error.response.data.message)
                } else {
                    // error.response.data.message.forEach(err => toast.error(err))
                    console.log(error.response.data.message)
                }

            }
            return { chapters: [] }
        }
    }
)
const editChapter = createAsyncThunk(
    'edit_one_chapter',
    async ({ _id, data, headers }) => {
        try {
            let response = await axios.put("http://localhost:8000/chapters/" + _id, data, headers)
            // toast.success('Chapter edited successfully')
            return {
                chapter: response.data.chapter
            }
        } catch (error) {
            if (error.response.data === 'Unauthorized') {
                // toast.error('You need to Login')
            } else {
                if (typeof error.response.data.message === 'string') {
                    // toast.error(error.response.data.message)
                } else {
                    // error.response.data.message.forEach(err => toast.error(err))
                    console.log(error.response.data.message)
                }
            }
            return { chapters: [] }
        }
    }
)
const getInfo = createAsyncThunk(
    'getInfo',
    async ({ order, chapter }) => {
        try {
            return {
                order,
                chapter
            }
        } catch (error) {
            return {
                order: null,
                chapter: {}
            }
        }
    }
)



// const readAll = createAsyncThunk("readAll", async ({manga_id})=>{
//     try {
//         let response = await axios.get("http://localhost:8000/chapters/all/" + manga_id)
//         return { chapters: response.data.chapter }
//     } catch (error){
//         return { chapters: [] }
//     }
// })

// const editChapter = createAsyncThunk("editChapter", async ({ manga_id }) => {
//     let token = localStorage.getItem('token')
//     let headers = {headers: {'Authorization': `Bearer ${token}`}}
//     try{
//         console.log("hola")
//         let response = await axios.put(`http://localhost:8000/chapters/${manga_id}`, {headers})
//         return {
//             chapters: response.data.allChapter,
//             message: "Edited chapter"
//         }
//     } catch (error) {
//         return { chapters:[],
//                 message: "no funciona"}
//     }
// })


// const deleteChapter = createAsyncThunk("deleteChapter", async ({ chapter_id }) => {
//     console.log(chapter_id)
//     let token = localStorage.getItem('token')
//     let headers = {headers: {'Authorization': `Bearer ${token}`}}
//     try{
//         let response = await axios.delete("http://localhost:8000/chapters/" + chapter_id, headers)
//         return {delete: 'delete', response: response.data}
//     } catch (error) {
//         console.log(error)
//         return {chapters: []}
//     }
// })

const actions = { readAll, editChapter , deleteChapter, getInfo}

export default actions