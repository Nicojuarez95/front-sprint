import React from 'react'
import "./editchaptermodal.css"
import { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import modalActions from '../../store/RenderEditModal/actions'
import editchaptermodal from '../../store/EditChapters/actions'

export default function EditChapterModal({ selectedChapter, data, newData }) {


    const dispatch = useDispatch()
    const { renderModal } = modalActions
    const { editChapter } = editchaptermodal

    function handleClose() {
        dispatch(renderModal({ state: false }))
    }

    const headers = { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }

    async function handleSend() {
        let editedChapter = {
            [data]: newData
        }
        let info = {_id: selectedChapter._id, data: editedChapter, headers: headers }
        dispatch(editChapter(info))

        setTimeout(() => {
            handleClose()
        }, 1500)

    }


  return (
    <div className='edit-modal'>
    <h2>Are you sure you want to edit this chapter?</h2>
    <div className='modal-btns'>
        <p className='btn-handlesend' onClick={handleSend}>Edit</p>
        <p className='btn-handlecancel' onClick={handleClose}>Cancel</p>
    </div>
    <Toaster />
    </div>
  )
}
