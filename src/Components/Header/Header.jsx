import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import logo from '../../images/olx.png'
import logo2 from '../../images/OLX2.webp'
import {BsCarFront} from 'react-icons/bs';
import {BsBuildings} from 'react-icons/bs';
import {AiOutlineSearch} from 'react-icons/ai';
import {RiArrowDropDownLine} from 'react-icons/ri';
import {LuSearch, LuShovel} from 'react-icons/lu';
import {FcGoogle} from 'react-icons/fc';
import {GrMail}from 'react-icons/gr'
import{IoMdCall}from 'react-icons/io'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {auth} from '../../config/Firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import user_pic from '../../images/userpic.png'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link,useNavigate  } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Home from '../Home';

 function Header() {
 
  const [show, setShow] = useState(false);
  const[eshow,seteShow]=useState(false)

  const [email, setEmail] = useState();
  const[password,setPassword]=useState()
  const[name,setName]=useState()


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleeClose = () => seteShow(false);
  const handleeShow = () => seteShow(true)
  let naviagte = useNavigate()

  const email_pg=()=>{
    
    handleClose()
    handleeShow()
  }
  const sign_pg=()=>{

    handleeClose()
    handleShow()
  }
  const sell_btn=()=>{
    if(!user_active){
      handleShow()
    }
    else{
      naviagte("/post")
    }
    
  }
  
  
  const sign_email=async ()=>{
    console.log(email,password)
    localStorage.setItem("username",name)
    try{
    const user = await createUserWithEmailAndPassword(auth,email,password)
    .then((userdata) => 
   console.log(userdata.uid),
   localStorage.setItem("user_reg",true),
   window. location. reload()
    
    )
    .catch(e=>{
      console.log(e.code)
    })
   
  }
  catch(e){
    console.log(e.code)
    alert(e)
  }

      

  }
  let user_active =localStorage.getItem("user_reg")
  let username =localStorage.getItem("username")
  const Lugout=()=>{
    localStorage.removeItem("user_reg")
    window. location. reload()
  }
  return (
    <div>
    <div className='fixed_nav'>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='m-0 bg-light'>
        <img className='mainimg' src={logo}/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{position:"absolute",left:0,top:5}} />
        <Navbar.Brand className='olx-m' href="#home">{<BsCarFront className='olx-i'/>}Motors</Navbar.Brand>
        <Navbar.Brand  className= "olx-m" href="#home">{<BsBuildings className='olx-i'/>}Property</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Row className=" m-3" >
          { !user_active ?
          <>
        <Col xs={2} ><Nav.Link><img  style={{height:"50px",width:"50px"}}src="https://www.olx.com.pk/assets/iconProfilePictureLoggedOut.d9525941a90d138552056f9fec4fbd63.png"/></Nav.Link></Col>
        <Col xs={10} ><Nav.Link><p>Enter to your account</p><p onClick={handleShow}  style={{textDecoration:"underline"}}>Login to your account</p></Nav.Link></Col>
        </>
     :
     <>
     <Col xs={2} ><Nav.Link><img  style={{height:"50px",width:"50px"}}src={user_pic} /></Nav.Link></Col>
     <Col xs={10} ><Nav.Link><p>Hello {username}</p><p  style={{textDecoration:"underline"}}>View and edit your profile</p></Nav.Link></Col>
     </>
     }
        </Row>
          
          

          <hr/>
            <Nav.Link><p onClick={()=>sell_btn()}>Start selling</p></Nav.Link>
            <Nav.Link >My Ads</Nav.Link>
            <Nav.Link>Help</Nav.Link>
            <Nav.Link>Chat</Nav.Link>
             { !user_active ? <Nav.Link> <Button className='w-100 p-2' variant="dark" onClick={handleShow} >Login</Button></Nav.Link> 
             :
             <>
    <Nav.Link>Favourite</Nav.Link>
    <Nav.Link
    >Setting</Nav.Link>
    <Nav.Link>Logout</Nav.Link>
    </>
 }
            
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <img className='logo2' src={logo2} alt="" />
    <div className='loca_div'>
      <AiOutlineSearch style={{marginTop:16+'px',height:25+'px',width:35+'px'}}/>
      <input type="text" className='loca_input' placeholder='Pakistan' />
      <RiArrowDropDownLine style={{marginTop:12+'px',height:40+'px',width:40+'px'}}/>
</div>
<div className='search_div'>
<input type="text" className='search_input' placeholder='Find Cars,Mobile Phones and more...' />
<button className='search_btn'><LuSearch/></button>
</div> 
{ !user_active ?<button style={{border:"none",backgroundColor: '#f8f9fa'}}  className='login_btn'  onClick={handleShow}>
        Login
      </button>
      :
      <div className='user_btn'>
      <img style={{ marginLeft:"20px",height:"50px",width:"50px"}} src={user_pic}/>
      <Dropdown>
      <Dropdown.Toggle style={{backgroundColor:"#f8f9fa"}} id="dropdown-basic">
     <button style={{border:"none",backgroundColor: '#f8f9fa'}}>
       <RiArrowDropDownLine style={{marginTop:12+'px',height:40+'px',width:40+'px'}}/>
       </button>
       </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Start selling</Dropdown.Item>
        <Dropdown.Item href="#/action-2">My Ads</Dropdown.Item>
        <Dropdown.Item onClick={()=>Lugout()}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>
}
      
      <Modal show={show} onHide={handleClose} animation={false} className='Modal'>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body style={{textAlign:"center"}}>
            <img className="modal_logo" src={logo2} alt="" />
            <p className='modal_h1'>WELCOME TO OLX</p>
            <p className='modal_p'>The trusted community of<br /> buyers and sellers.</p><Button className='modal_btn'><FcGoogle className='modal_ic' />Continue with Google</Button>
            <Button className='modal_btn'><BsFacebook style={{ color: 'blue' }} className='modal_ic' />Continue with Facebook</Button>
            <Button onClick={()=>email_pg()} className='modal_btn'><GrMail  className='modal_ic' />Continue with Email</Button><Button className='modal_btn'><IoMdCall className='modal_ic' />Continue with Phone</Button>
            <p className='modal_pf'>By continuing, you are accepting<br/>
OLX Terms of use and Privacy Policy</p>
        </Modal.Body>
      </Modal>
      <Modal show={eshow} onHide={handleeClose} animation={false} className='Modal'>
        <Modal.Header closeButton>
        <button style={{border:"transparent",fontSize:"30px",backgroundColor:"white",color:'gray'}} onClick={()=>sign_pg()}><AiOutlineArrowLeft/></button>
        </Modal.Header>
        <Modal.Body style={{textAlign:"center"}}>
            <img className='emodal_logo' src={logo2} alt="" />
            <p className='modal_h1'>Enter your Name</p>
            <input type="text"  className='emodal_input' placeholder='Email' onChange={(e)=>setName(e.target.value)}/>
            <p className='modal_h1'>Enter your Email</p>
            <input type="text"  className='emodal_input' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            <p className='modal_h1'>Enter your password</p>
            <input type="password" onChange={(e)=>setPassword(e.target.value)}  className='emodal_input' placeholder='Password'/>
            <button onClick={()=>sign_email()} className='emodal_btn '>Next</button>
            <p className='modal_pf'>We won't reveal your email to anyone else nor use it to send you spam.</p>
        </Modal.Body>
      </Modal>



<div className='sell_btn'>
<button onClick={()=>sell_btn()}><p>+SELL</p></button>
</div>

</div>
</div>
  )
}
export default Header
