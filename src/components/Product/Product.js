import React from 'react';
import './Product.css'
const Product = ({productData}) => {
    const {price, picture, name} = productData
    return (
        <div className='product'>
            
            <img src={picture} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price:$ {price}</p>
            </div>
            <button className='cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Product;