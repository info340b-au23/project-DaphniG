import React from 'react';

function Progresssquares(props) {
    const { skinprogressinfo } = props;

    const productsavedimage = skinprogressinfo.map((product,index) => (
      <div key={index} className="flexcard">
        <img className="imgself" src={product.url} alt={product.alt} />
        <p> {product.date}</p>
      </div>

    ));
  
    return (
      <div className="flexrows">
        <h2 className="profile-tool-titles">Skin Progress</h2>
        <section className="flex-item">
          {productsavedimage}
        </section>
      </div>
    );
    }

    export default Progresssquares;
