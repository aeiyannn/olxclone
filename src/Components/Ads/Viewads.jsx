import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { db } from '../../config/Firebase';
import { set, ref, push, get,remove } from "firebase/database";
import {AiOutlineHeart} from 'react-icons/ai'

function Viewads(){
    let [ads,Setads]=useState()
    useEffect(()=>{

  
        // get all data
        const db_ref= ref(db,"allads")
        get(db_ref).then((snap)=>{
          console.log(Object.values(snap.val()))
        Setads(Object.values(snap.val()))
        })
      
      
      
      },[])
        return (
            <>
                <Row className='my-5'>
                    {
                        ads?.map((v,i)=>{
                            return(
                            <Col xs={12} sm={4} md={3} lg={3}>


                            <Card className='mb-5'>
                                <Card.Img variant="top" src={v.imagelink} style={{width:"100%",height:"200px"}}/>
                                <Card.Body>
                                    <Row>
                                        <Card.Title style={{ width: "50%" }}>{v.price} </Card.Title>
                                        <Card.Title style={{ width: "50%", textAlign: "end" }}><AiOutlineHeart /></Card.Title>
                                    </Row>
    
    
                                    <Card.Text className='fs-5 '>
                                        {v.description}
                                    </Card.Text>
                                    <Card.Text style={{ paddingTop: "10px", fontSize: "18px", color: "gray" }}>
                                        {v.location}
                                    </Card.Text>
    
                                    <Card.Text style={{ paddingTop: "5px", fontSize: "15px", color: "gray" }}>
                                        1 day ago
                                    </Card.Text>
    
                                </Card.Body>
                            </Card>
                        </Col>
                            )
                        })
                    }
                   
                </Row>

            </>
        );
    }

export default Viewads