import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let captureId = createAsyncThunk(
    'captureManga',
    async({ manga_id }) =>{
        try{
            let response = await axios.get('https://minga-vrxh.onrender.com/mangas-form/' + manga_id)
            return {
                manga:response.data.manga
            }
        } catch (error){
            console.log(error)
            return {
                manga: []
            }
        }
    }
)
let deleteManga = createAsyncThunk(
    'manga/deleteManga',
    async (mangaId, { rejectWithValue, getState }) => {
      try {
        const token = getState().auth.token;
        const headers = { Authorization: `Bearer ${token}` };
        const response = await axios.delete(
          `https://minga-vrxh.onrender.com/mangas-form/${mangaId}`,
          { headers }
        );
        return { mangaId: mangaId, response: response.data };
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

const actions = { captureId, deleteManga }

export default actions