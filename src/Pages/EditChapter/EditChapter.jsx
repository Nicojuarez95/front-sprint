import React from 'react'
import "./editchapter.css"
import EditChapterForm from '../../Components/EditChapterForm/EditChapterForm'
import Chapter from '../../Components/Chapter/Chapter'

export default function EditChapter() {
  return (
    <div className='editChapterPage'>
        <EditChapterForm/>
        <Chapter/>
    </div>
  )
}
