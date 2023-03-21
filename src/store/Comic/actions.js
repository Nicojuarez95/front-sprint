import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const read_events = createAsyncThunk(
  "read_events", 
  async ({ inputText, captureChecks, pages }) => {
  try {
    let response = await axios.get(
      "https://minga-vrxh.onrender.commangas-form/view?title="+inputText.trim()+"&category="+captureChecks+"&page="+pages,
    );
    
    return {
      events: response.data.mangas
    };
  } catch (error) {
    return {
      events: [],
    };
  }
});

const read_manga = createAsyncThunk(
  'read_manga',
  async ({ id }) => {
      let url = 'https://minga-vrxh.onrender.commangas-form/' + id;

      try {
          let response = await axios.get(url)
          return {
              manga: response.data.manga
          }
      } catch (error) {
          return {
              manga: []
          }
      }
  }
)

const read_chapters = createAsyncThunk(
  'read_chapters',
  async ({ id, page }) => {
      let url = 'https://minga-vrxh.onrender.comchapters?manga_id='+id+'&page='+ page;

      try {
          let response = await axios.get(url)
          return {
              chapters: response.data.chapters
          }
      } catch (error) {
          return {
              chapters: []
          }
      }
  }
)

const actions = { read_events, read_manga, read_chapters }

export default actions
