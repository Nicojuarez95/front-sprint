import React from "react";
import './infocatycompany.css'
import {Link as Anchor} from 'react-router-dom'

export default function InfoCatYCompany({info}){
    return(
        <div className="category-company">
        <button className="category">{info.category_id.name}</button>
        <Anchor to={"/author/"+ info.author_id._id}>
        <h3 className="company">{info.author_id.name}</h3>
        </Anchor>
       
      </div>
    )
}