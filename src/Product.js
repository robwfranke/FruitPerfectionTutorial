import React from 'react';
// import './App.css';
// import App from "./App";

function Product({image,title, description}) {
    return (
            <article className="product">
                <img
                    src={image}
                    alt={title}/>
                <h2 className="product-name">Citroen
                    {title}
                </h2>
                <p className="product-description">
                    {description}
                </p>

            </article>



    );
}

export default Product;