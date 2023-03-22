import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './editchapter.css'
import chapterAction from "../../store/EditChapters/actions"
import { useParams } from 'react-router'
import axios from 'axios'

// import naruto from '../../images/NarutoMaqueta.png'

const { captureAllChapter, captureManga } = chapterAction
let url
let chapterSelect
let typeData='default'
let edit=false;

export default function EditChapter() {

    const dispatch = useDispatch()
    const { manga_id } = useParams()
    
    const select = useRef()
    const dataEdit = useRef()
    const [reload, setReload] = useState(false)
    const [realoadChapter, setReloadChapter] = useState(false)
    const AllChapter = useSelector ((store) => store.editDeleteChapter)
    console.log(AllChapter)
    const manga = useSelector ((store) => store.editDeleteChapter.manga)
    let token = localStorage.getItem('token')
    let headers = {headers: {Autorization: `Bearer ${token}`}}
    url = "http://localhost:8000/chapters/" + manga_id
    chapterSelect = AllChapter.find(each => each._id===select.current.children[1].value)

    useEffect(()=>{
        if(manga.length === 0 || manga._id !== manga_id){
            dispatch(captureManga({manga_id: manga_id}))
        }
    }, [])

    useEffect(()=>{
        if(AllChapter.length === 0 || manga._id !== manga_id || edit ){
            dispatch(captureAllChapter({manga_id: manga_id}))
            edit=false;
        }
    },[realoadChapter])

    function handleChange(){
        typeData = select.current.childen[2].value
        //Object.keys(chapterSelect)
        setReload(!reload)
    }

    async function handleEdit(e){
        e.preventDefault()
        if(typeData!='default'){
            let data = {
                "_id": chapterSelect._id,
                [typeData]:dataEdit.current.value
            }
            try{
                await axios.put(url, data, headers)
                setReloadChapter(!realoadChapter)
                edit=true
                console.log("editado con exito")
                dataEdit.current.value=""
            } catch (error) {
                console.log(error)
            }
        }else{
            console.log("alerta, debe seleccionar que caracter y dato desea editar")
        }
    }

    async function handleDelete(){
        if(chapterSelect!=undefined){
            url = "http://localhost:8000/chapters/"+chapterSelect._id
            try{
                await axios.delete(url, headers)
                setReloadChapter(!realoadChapter)
                edit=true
                console.log("borrado con exito")
                select.current.children[1].value="default"
                dataEdit.current.value=""
                handleChange()
            } catch (error) {
                console.log(error)
            }
        }else{
            console.log("alerta, debe seleccionar que caracter y dato desea eliminar")
        }
    }

    console.log(useSelector(store=>store))

  return (
    <>
    
    <div className='contEditChapter'>

        <div className='editChapter1'>
            <div className='editForm'>
                <h2 className='h2EditChapter'>Edit Chapter</h2>
                <form id="edit-chapter-form" onSubmit={handleEdit}>
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
            <p>{chapterSelect?chapterSelect.title:manga.title}</p>
            <div className='chapterImg'>
                <img id="edit-chapter-photo" src={chapterSelect?chapterSelect.cover_photo:manga.cover_photo} alt="cover photo" className='imgEC'/>
            </div>

        </div>
    </div>

    </>
  )
}
