import React, { useEffect } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import Footer from '../../components/Footer';


const Message = () => {

  useEffect(()=>{
    
    if (window.localStorage.getItem("logout") == "true") {
			window.location.href = "http://localhost:3000/login";
		  }
  },[])
  return (
    <>
    <div>
 
    <div>
    
    <MDBContainer>
      <section>
        
    

        <MDBRow>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon far icon="paper-plane text-primary pe-2" /> <strong> PRIVACY POLICY</strong>
            </MDBTypography>
            <p>
            
                
              {" "}
              
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="pen-alt text-primary pe-2" /><strong> </strong>
            </MDBTypography>
            <p>
              <strong>
                
              </strong>{" "}
            
        
            
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="rocket text-primary pe-2" /><strong></strong>
            </MDBTypography>
            <p>
           
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="home text-primary pe-2" /><strong> </strong>
            </MDBTypography>
            <p>
            
              <strong>
              </strong>{" "}
              At TripEase, Inc. (“TripEase”, “we”, “us”, or “our” which include our group and affiliated companies, including, without limitation, TripEase Limited, TripEase Australia Pty Ltd, and TripEase Canada Inc., which such entities collect information from users from particular jurisdictions), our most important asset is our relationship with our user community. We are committed to maintaining the confidentiality, integrity and security of information about our users and their organizations. This privacy policy (“Privacy Policy” or “Policy”) describes how we collect, use, disclose, share and secure the personal and company information you provide when you use our expense management, invoicing or bill processing software, through our mobile application (the “Application”) or visit the Expensify websites www.TripEase.com or www.use.TripEase.com or new.TripEase.com (collectively, the “Site” and, together with any related software, tools and services provided in connection with the Application or the Site, the “Expensify Service”). It also describes your choices regarding the use, access and correction of your Personal Data (as defined in Section 3 of this Privacy Policy) and how to contact us if you have any further queries or complaints about our management of your personal information.
              
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="book-open text-primary pe-2" /> <strong></strong>
            </MDBTypography>
            <p>

          

            </p>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Message;
