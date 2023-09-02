import React, { useEffect, useState } from 'react'
import './category.css'
import {BsChevronDown} from 'react-icons/bs'
import {  ref, get } from "firebase/database";
import{db} from "../../config/Firebase"


 function Category() {
  const [data,Setdata]=useState([])
  useEffect(() => {
    getData()
  }, [])
  const getData=()=>{
    const db_ref= ref(db,"category/")
    get(db_ref).then((snap)=>{
      console.log(snap.val())
      Setdata(Object.values(snap.val()))
      console.log(Object.values(snap.val()))
    })
  }
  
    return (
    <div className='category_style'>
        <p>All categories<button><BsChevronDown style={{width:40+'px',height:30+'px'}}/></button></p>
        <ul>{
          data==null?data("No data"):
          data.map((v,i)=>{
            return(
          <li key={i}>{v.Name}</li>
            )
          })
          }
          
        </ul>
    </div>
  )
}
export default Category