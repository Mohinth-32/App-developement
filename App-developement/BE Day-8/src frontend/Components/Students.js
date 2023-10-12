
import React, { useState } from 'react';
import './Student.css'
// import Footer from './Footer';
function Students() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
    <div>
    <h2 id="hello">Add Receipt</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
      {image && (
        <div>
          <h3>Preview:</h3>
          <img src={image} alt="Receipt" />
        </div>
      )}
    </div>
    
    </>
  );
}

export default Students;
