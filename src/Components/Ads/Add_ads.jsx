import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import olx from "../../images/OLX2.webp"
import './Ad.css'
import { AiOutlineArrowLeft} from 'react-icons/ai'
import userpic from '../../images/userpic.png'
import { useNavigate } from 'react-router-dom';
import { RadioGroup, RadioButton,ReversedRadioButton } from 'react-radio-buttons';
import { getDownloadURL, ref as sRef, uploadBytes } from "firebase/storage";
import { storage,db } from '../../config/Firebase';
import { set, ref, push, get,remove } from "firebase/database";





function Add_ads(){
  const [Condition,Setcondition]=useState()
  const[imgurl,setimgurl]=useState()
  let[info,Setinfo]=useState({
    category:"",
    title:"",
    description:"",
    brand:"",
    price:"",
    location:"",
    username:""
   })
   const handleupload = (e) => {
    console.log(e.target.files[0]);

    const storageref = sRef(storage, `imagesfiles/${e.target.files[0].name}`);

    uploadBytes(storageref, e.target.files[0])
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            console.log(url);
            setimgurl(url)
          })
          .catch((e) => {});
      })
      .catch((e) => {});
  };
  const handlechg=(e)=>{
    Setinfo({...info,[e.target.name]:e.target.value})
  }
  const post_data=async ()=>{

     
    try {
      console.log(info)
    let obj = {
      category :info.category,
  title:info.title,
  description:info.description,
  price:info.price,
  name:info.username,
 condition:Condition,
  address:info.location,
  imagelink:imgurl


  
      
     
    };

    let dbref = ref(db,"allads/"); //ref,path
    const ndref=push(dbref)
  await  set(ndref,obj);
  alert("user add ")
  Navigate('/')

  } catch (e) {
    alert(e);
  }
  }
 
  var Navigate=useNavigate()
  useEffect(() => {
    var data=localStorage.getItem('user_reg')
    if (!data){
      Navigate('/')
    }
    }, [])
  
    

return(
    <>
    
    <div className="Head_Style">
      <button onClick={()=>Navigate('/')} className="arrow_btn"><AiOutlineArrowLeft/></button>
        <img style={{height:"35px",width:'55px',paddingBottom:'7px'}} src={olx}/>
    </div>
    <h1 className="text-center fs-4 mt-4 fw-bold"  >POST YOUR AD</h1>
    <div className="ad_form">
      <h1 className=" fs-4 m-2 fw-bold">SELECT CATEGORY</h1>
      <select  name='category' style={{width:"100%"}} className="m-2" onChange={(e)=>handlechg(e)} >
      <option selected disabled  value="">Select category</option>
  <option value="Cars">Cars</option>
  <option value="Mobilephones">Mobilephones</option>
  <option value="Bikes">Bikes</option>
  <option value="Furniture">Furniture</option>
  <option value="Cosmetics">Cosmetics</option>
  <option value="Animal">Animal</option>
  <option value="Toys">Toys</option>
  <option value="Services">Services</option>
  <option value="Electronics">Electronics</option>
  <option value="Books">Books</option>
  <option value="Fashion">Fashion</option>

  
</select>
<hr/>
<h1 className="m-4 fs-4">INCLUDE SOME DETAILS</h1>
<Form>
        <Form.Label>Ad title</Form.Label>
        <input name='title' type="text" onChange={(e)=>handlechg(e)}  className="ads_inp" required/>
        <Form.Text className="text-muted">
        Mention the key features of your item (e.g. brand, model, age, type)
        <p className="text-end m-0">
        {info.title.length}/70
        </p>
        </Form.Text>
       
        <Form.Label >Description</Form.Label>
        <textarea name="description"  onChange={(e)=>handlechg(e)} required/>
        <Form.Text className="text-muted">
        Include condition, features and reason for selling
        <p className="text-end m-0">
        {info.description.length}/4096
        </p>
        </Form.Text>
        <Form.Label>Brand</Form.Label>
        <input name="brand" onChange={(e)=>handlechg(e)} type="text"  className="ads_inp" required/>
        <Form.Label>Condition</Form.Label>
        <br />
        {/* <div>
        <label>New</label>
        <input type="radio" value="New" name="condition" onChange={(e)=>handlechg(e)}/>
        <label>Old</label>
<input type="radio" value="Old"  name="condition" onChange={(e)=>handlechg(e)}/>
<label>Openbox</label>
<input type="radio" value="Openbox"  name="condition" onChange={(e)=>handlechg(e)}/>
<label>For Parts or Not Working</label>
<input type="radio" value="For Parts or Not Working"  name="condition" onChange={(e)=>handlechg(e)}/>
</div> */}
<RadioGroup style={{width:"100%",display:"flex"}}  onChange={(e)=>Setcondition(e)} horizontal>
  <RadioButton  value="New" rootColor="black" pointColor="#00a49f"  >
    New
  </RadioButton>
  <RadioButton rootColor="black" value="Old"   pointColor="#00a49f" >
    Old
  </RadioButton>
  <RadioButton rootColor="black" value="Openbox"   pointColor="#00a49f" >
    Openbox
  </RadioButton>
  <RadioButton rootColor="black" value="For Parts or Not Working"   pointColor="#00a49f" >
    For Parts or Not Working
  </RadioButton>
 
 
</RadioGroup>

<hr />
<Form.Label>SET A PRICE</Form.Label>
<input name='price' type="number"  className="ads_inp" onChange={(e)=>handlechg(e)} required/>
    </Form>
    <hr />
    <Form.Label id="d_n">UPLOAD A PHOTO</Form.Label>
    <input type="file" accept="image/*" className="img_inp" onChange={(e)=>handleupload(e)} required />
    {/* <input type="file" accept="image/*" className="img_inp"/>
    <input type="file" accept="image/*" className="img_inp"/>
    <input type="file" accept="image/*" className="img_inp"/> */}
<hr />
    <Form.Label>YOUR ADS LOCATION</Form.Label>
    <input name='location' type="text"  className="ads_inp" onChange={(e)=>handlechg(e)} required />
    <hr />
    <Form.Label id="d_n">Reveiw Detail</Form.Label>
    <img src={userpic} style={{display:'inline',width:'120px'}}/>
    <input name='username' type="text" style={{display:'inline',width:"50%"}} className="ads_inp" onChange={(e)=>handlechg(e)} required/>
    <hr />
    <button className="submit_data" onClick={()=>post_data()}>Post now</button>
    </div>

    </>
)
}
export default Add_ads