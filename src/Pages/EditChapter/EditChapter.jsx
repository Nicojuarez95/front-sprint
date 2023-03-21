import React from 'react'
import './editchapter.css'
import naruto from '../../images/NarutoMaqueta.png'

export default function EditChapter() {
  return (
    <>
    
    <div className='contEditChapter'>

        <div className='editChapter1'>
            <div className='editForm'>
                <h2 className='h2EditChapter'>Edit Chapter</h2>
                <form action="">
                    <input type="text" placeholder='  name of the manga' className='inputClean'/>
                    <select className='labelsEdit'>
                        <option disabled selected>select chapter</option>
                    </select>
                    <select className='labelsEdit'>
                        <option disabled selected>select data</option>
                    </select>
                    <input type="text" name="" id="" placeholder='  data to edit' className='inputClean'/>

                    <input type="submit" className='buttonEdit be1' value="Edit"/>
                </form>
                <input type="submit" className='buttonEdit be2' value="Delete"/>
            </div>

        </div>

        <div className='editChapter2'>
            <p>Chapter #1 - Discover the word</p>
            <div className='chapterImg'>
                <img src={naruto} alt="" className='imgEC'/>
            </div>

        </div>
    </div>

    </>
  )
}
