import React from 'react';
import './SingelItem.css'
const SingelItem = ({productName, img}) => {
    console.log(productName);
    return (
        <div className='d-flex'>
            <div className='product-img'>
             <img src={img} alt="" />
            </div>

            <div>
                <p>{productName}</p>
            </div>
        </div>
    );
};

export default SingelItem;