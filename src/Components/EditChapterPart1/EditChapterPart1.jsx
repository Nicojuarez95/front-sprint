import React from 'react'
import EditChapterForm from '../EditChapterForm/EditChapterForm'
import "./editchapterpart1.css"

export default function EditChapterPart1({ chapterInfo, setSelectedChapter, selectedChapter, title}) {
  return (
    <>
        <div className='editChapter1'>
            <h1 className='title-edit'>Edit Chapter</h1>
            <EditChapterForm chapterInfo={chapterInfo} selectedChapter={selectedChapter} title={title} setSelectedChapter={(chapter) => setSelectedChapter(chapter)}/>
        </div>
    </>
  )
}
