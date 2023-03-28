import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_chapters = createAsyncThunk(
    'get_chapter',
    async({ inputId, inputPage, quantity }) => {
        let url 
        if(quantity === 0){
            url = 'https://minga-host.onrender.com/chapters?manga_id='+inputId+'&quantity='+quantity
        }else if(inputPage){
            url = 'https://minga-host.onrender.com/chapters?manga_id='+inputId+'&page='+inputPage
        }
        console.log(url)
        try {
            let response = await axios.get(url)
            return {
                chapters: response.data.chapters
            }
        } catch (error) {
            console.log('No se ha podido traer el pedido')
            return {
                chapters: []
            }
        }
    }
)

const actions = { get_chapters }
export default actions