import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './footer.css'

export default function Footer() {
  return (
    <MDBFooter style={{backgroundColor:'#e8eeef'}} className='text-center text-lg-start text-muted'>

      <section>
          <MDBRow className='row1'>
            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                POPULAR CATEGORIES
              </h6>
              <p>
              <a href='#!' className='text-reset p-0 m-0 '>
                  Cars
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset p-0 m-0'>
                  Flats for rent
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset p-0 m-0'>
                  Mobile Phones
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset p-0 m-0'>
                  Jobs
                </a>
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>TRENDING SEARCHES</h6>
              <p>
                <a href='#!' className='text-reset p-0 m-0'>
                  Bikes
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset p-0 m-0'>
                  Watches
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset p-0 m-0'>
                  Books
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset p-0 m-0'>
                  Dogs
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>ABOUT US</h6>
              <p>
                <a href='#!' className='text-reset p-0 m-0'>
                About Dubizzle Group
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset p-0 m-0'>
                OLX Blog
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset p-0 m-0'>
                  Contact us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset p-0 m-0'>
                OLX for Businesses
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>OLX</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Help
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                sitemap
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> Term Of use
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' />Privacy policy
              </p>
            </MDBCol>
            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>FOLLOW US</h6>
              
              <img style={{display:'inline',height:"80px",width:"100px"}} src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" alt="" />
            <img style={{display:'inline',height:"80px",width:"100px"}} src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" alt="" />
            <img style={{display:'inline',height:"80px",width:"100px"}} src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" alt="" />
            </MDBCol>
            
          </MDBRow>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: '#002f34' }}>
      <p className='text-end text-white text-bold'>Free Classifieds in Pakistan . © 2006-2023 OLX</p>
      </div>
    </MDBFooter>
  );
}