// import React, { useEffect, useState } from 'react'
// import './editchapter.css'
// import EditChapterPart2 from '../../Components/EditChapterPart2/EditChapterPart2'
// import EditChapterPart1 from '../../Components/EditChapterPart1/EditChapterPart1'
// import { useParams } from 'react-router-dom'
// import chapterActions from '../../store/EditChapters/actions'
// import { useDispatch, useSelector } from 'react-redux'
// import { store } from '../../store/store'

// const { readAll } = chapterActions

// export default function EditChapter() {
  
//     const {manga_id} = useParams()
//     const dispatch = useDispatch()
//     let {chapters, title, chapter} = useSelector(store => store.editchapter)
//     const [selectedChapter, setSelectedChapter] = useState(chapter)
//     console.log(store)

//     useEffect(() => {
//         dispatch(readAll({ manga_id }))
//     }, [])


//   return (
//     <>
//       <div className='contEditChapter'>
//       <EditChapterPart1 chapterInfo={chapters} title={title} selectedChapter={selectedChapter} setSelectedChapter={(chapters) => setSelectedChapter(chapters)} />
//       <EditChapterPart2 selectedChapter={selectedChapter}/>
//       </div>

//     </>
//   )
// }

import React from 'react'
import EditChapterForm from '../../Components/EditChapterForm/EditChapterForm'

export default function EditChapter() {
  return (
    <div>
        <EditChapterForm/>
    </div>
  )
}

