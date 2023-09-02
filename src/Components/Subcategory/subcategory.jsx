import React,{useEffect, useState}from "react"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from '../../config/Firebase';
import { set, ref as rf, push, get,remove } from "firebase/database"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./subcategory.css"
 function Subcategory(){
  
  useEffect(() => {
    Data()
  }, [])
  let [cat,Set_cat]=useState([])
  const Data=()=>{
    var data = rf(db, "subcategory/")

    get(data).then((snap) => {
        console.log(snap.val())
        if(snap.val()!=null){
          console.log(Object.values(snap.val()))
        Set_cat(Object.values(snap.val()))
        }

    })
        .catch((e) => console.log(e.code)
        
        )
        




}
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 5
  }
};
    return(
<>
<Container>
<h3>All categories</h3>
  <Row className="r-no">
{
  cat?.map((v,i)=>{
    return(
      <>
      <Col className="d-flex m-3">
      <div className="d_sc">
      <img style={{width:"120px",height:"120px",borderRadius:60+'px'}}   src={v.img} alt="" /> <br />
      <div className="d-flex justify-content-center">
      <b className="text-center " style={{fontSize:"20px"}}>{v.Name}</b>
      </div>
      </div>
      </Col>
      
      </>
      )
  })
}
</Row>
</Container>
<Carousel responsive={responsive}
 removeArrowOnDeviceType={["tablet", "mobile"]}>
  

{
  cat.map((v,i)=>{
    return(
    <>
      <div className="mb_sc justify-content-center" style={{margin:"15px"}}>
      <img style={{width:"50px",height:"50px",borderRadius:25+'px'}}   src={v.img} alt="" />
      <div>
      <div className=" justify-content-center">
      <b className="text-center " style={{fontSize:"10px",padding:'20px'}}>{v.Name}</b>
      </div>
      </div>
      </div>
      </>
      )
  })
}
</Carousel>;
</>
    )
 }
 export default Subcategory




