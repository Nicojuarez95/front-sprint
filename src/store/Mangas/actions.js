import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const read_mangas = createAsyncThunk(
    "read_mangas",
    async ({ page, inputText, categories, order, headers }) => {
        try{
            let response = await axios.get("http://localhost:8000/mangas/?page="+page+"&title="+inputText.trim()+"&category="+categories+"&order="+order,headers)
            console.log(response)
            return { mangas: response.data.mangas}
            
        }catch(error){
            return { mangas: '' }
        }
    }
)

const read_manga = createAsyncThunk(
    'read_manga',
    async ({ id }) => {
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let url = 'http://localhost:8000/mangas/' + id;
        try {
            let response = await axios.get(url, headers)
            return {
                manga: response.data.manga
            } 

        } catch (error) {
            return {
                manga: {}
            }
        }
    }
)



const actions = { read_mangas, read_manga }

export default actions
