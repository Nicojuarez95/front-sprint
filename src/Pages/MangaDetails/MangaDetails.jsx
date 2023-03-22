import React, { useEffect }  from 'react'
import './manga.css'
import Header from '../../Components/Header/Header.jsx'
import MangaPortada from '../../Components/DetailsManga/MangaPortada/MangaPortada'
import InfoCatYCompany from '../../Components/DetailsManga/InfoCatYCompany/InfoCatYCompany'
import ButtonsIcons from '../../Components/DetailsManga/ButtonsIcons/ButtonsIcons.jsx'
import Stats from '../../Components/DetailsManga/Stats/Stats.jsx'
import MangaChapters from '../../Components/DetailsManga/MangaChapters/MangaChapters'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import actions from '../../store/Manga/actions'

const {captureManga,delete_chapter} = actions

export default function MangaDetails() {

  let manga = useSelector(store => store.manga.manga)
  let _id = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(captureManga({ manga_id: _id.id, page: _id.page}))
    dispatch(delete_chapter)
  },[])

  return (
    <div>
      <Header/>

      { manga.length!=0? <MangaPortada info={manga}/>: null }
      { manga.length!=0? <InfoCatYCompany info={manga}/>: null}
      <ButtonsIcons/>
      <Stats chapterCount={265}/>
      { manga.length!=0? <MangaChapters info={manga}/> :null }

      
    </div>
  )
}
