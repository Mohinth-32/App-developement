import React from 'react'
import './Courses.css'
import Travel from './Travel';
import Footer from './Footer';
function Courses() {
  return (
    <>
    <div className="Courses">
      <h1>VEIW AND ADD YOUR TRIPS HERE...</h1>
      <Travel name="Travel Destination 1" />
      
      {/* Add more Travel components as needed */}
    </div>
    <Footer/>
    </>
  );
}

export default Courses