// import React from 'react'
// import './modaledelete.css'
// import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import actionEdit from '../../store/MangaEdit/actions.js'
// import axios from 'axios'
// import alertActions from '../../store/Alert/actions.js';
// import ModaleDelete from '../../Components/ModaleDelete/ModaleDelete'
// const {open} = alertActions

// const { deleteManga } = actionEdit

// export default function ModaleDelete() {
    

//     async function handleDelete(e) {
//         let dispatch = useDispatch()
//     const [render, setRender] = useState(false)
//     const id = useSelector(store => store.manga.manga)
//         const mangaId = e.target.id;
//         // const confirmed = window.confirm('Are you sure you want to delete this manga?');
      
//         // if (confirmed) {
//           await dispatch(deleteManga({ manga_id: mangaId }));
      
//           const url = `http://localhost:8000/mangas-form/${mangaId}`;
//           const token = localStorage.getItem('token');
//           const headers = { 'Authorization': `Bearer ${token}` };
      
//           try {
//             await axios.delete(url, { headers });
//             let dataAlert = {
//               icon: 'success',
//               title: "Manga removed"
//             }
//             dispatch(open(dataAlert))
//             setReload(!reload)
//           } catch (error) {
//             console.log(error);
//           }
//         // } else {
//         // }
//         let dataAlert = {
//           icon: 'success',
//           title: "Manga removed"
//         }
//         dispatch(open(dataAlert))
//         setReload(!reload)
//       }

//   return (
//     <div id="myModal" class="modal">
//         <div class="modal-content">
//             <p>Are you sure you want to delete this manga?</p>
//             <button id="confirm-btn" onClick={handleDelete}>Yes</button>
//             <button id="cancel-btn">Cancel</button>
//         </div>
// </div>
//   )
// }
