import React from 'react';
import './Product.css'
import { BsCartPlusFill } from 'react-icons/bs';
const Product = ({productData, addToCart}) => {
    const {price, picture, name} = productData
    return (
        <div className='product'>
            
            <img src={picture} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: {price}</p>
            </div>
            <button onClick={() =>addToCart(productData)} className='cart-btn'>Add to Cart <BsCartPlusFill className='icon' /></button>
        </div>
    );
};

export default Product;