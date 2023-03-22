import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const read_events = createAsyncThunk(
  "read_events", 
  async ({ captureChecks, pages }) => {
  try {
    let token = localStorage.getItem('token')
    let headers = {headers:{'Authorization':`Bearer ${token}`}}
    let response = await axios.get(
      "http://localhost:8000/mangas-form/me?category="+captureChecks+"&page="+pages, headers
    );
    
    return {
      events: response.data
    };
  } catch (error) {
    console.log(error)
    return {
      events: [],
    };
  }
});

const read_manga = createAsyncThunk(
  'read_manga',
  async ({ id }) => {
      let url = 'http://localhost:8000/mangas-form/me' + id;

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
      let url = 'http://localhost:8000/chapters?manga_id='+id+'&page='+ page;

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
