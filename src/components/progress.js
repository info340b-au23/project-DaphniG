import React, { useState } from 'react';

function Progresssquares(props) {
    const { skinprogressinfo } = props;

    const productsavedimage = skinprogressinfo.map((product,index) => (
      <div key={index} className="flexcard">
        <img className="imgself" src={product.url} alt={product.alt} />
        <input type="date"
        />
      </div>
    ));

      //** insert own picture */
      const [userPhoto, setUserPhoto] = useState(null);

      const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setUserPhoto(URL.createObjectURL(file));
  
        }
      };
    ;
  
    return (
      <div className="flexrows scrollmenu">
        <h2 className="profile-tool-titles">Skin Progress</h2>
        <section className="flex-item">
        {productsavedimage}
        {/* File input for uploading a user's own photo */}
        <div className='flexcard'>
        <label htmlFor="fileInput">
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <p>Upload Your Own Photo</p>
        </label>
        </div>
        </section>
      </div>
    );
    }

    export default Progresssquares;
