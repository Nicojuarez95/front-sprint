import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const captureAllChapter = createAsyncThunk("captureAllChapter", async ({ manga_id }) => {
    console.log(manga_id)
    try{
        let response = await axios.get('http://localhost:8000/chapters?manga_id=' + manga_id)
        return {
            response: { chapter: response.data.allChapter },
            message: "Edited chapter"
        }
    } catch (error) {
        return { chapters:[] }
    }
})


const captureManga = createAsyncThunk("captureManga", async ({ manga_id }) => {
    console.log(manga_id)
    try{
        let response = await axios.get("http://localhost:8000/mangas/" + manga_id)
        return {manga: response.data.manga}
    } catch (error) {
        console.log(error)
        return {manga: []}
    }
})
const actions = {captureAllChapter , captureManga}

export default actions