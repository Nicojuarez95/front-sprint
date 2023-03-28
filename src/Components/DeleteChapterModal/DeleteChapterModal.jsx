import React from 'react'
import "./deletechaptermodal.css"
import { useDispatch } from 'react-redux';
import  { Toaster } from "react-hot-toast";
import deleteModalActions from '../../store/RenderDeleteModal/actions'
import deletechapter from '../../store/EditChapters/actions'

export default function DeleteChapterModal({selectedChapter}) {

    const { renderDeleteModal } = deleteModalActions
    const { deleteChapter } = deletechapter
    const dispatch = useDispatch()

    function handleClose() {
        dispatch(renderDeleteModal({ state: false }))
    }

    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    async function handleDelete() {
        dispatch(deleteChapter({ _id: selectedChapter._id, headers: headers }))
        
        setTimeout(() => {
            handleClose()
        }, 1500)

    }
  return (
    <div className='delete-modal'>
            <h2>Are you sure you want to delete this chapter?</h2>
            <div className='modal-btns'>
                <p className='btn-handlesend' onClick={handleDelete}>Delete</p>
                <p className='btn-handlecancel' onClick={handleClose}>Cancel</p>
            </div>
            <Toaster />
        </div>
  )
}
