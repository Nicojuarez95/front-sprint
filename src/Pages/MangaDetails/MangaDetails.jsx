import React  from 'react'
import ButtonsIcons from '../../Components/DetailsManga/ButtonsIcons/ButtonsIcons.jsx'
import DetailsMain from '../../Components/DetailsManga/DetailsMain/DetailsMain.jsx'
import Stats from '../../Components/DetailsManga/Stats/Stats.jsx'
import Header from '../../Components/Header/Header.jsx'

import './manga.css'

export default function MangaDetails() {
  return (
    <div>
      <Header/>
      <DetailsMain/>
      <ButtonsIcons/>
      <Stats chapterCount={265}/>
      {/* </> */}
      
    </div>
  )
}
