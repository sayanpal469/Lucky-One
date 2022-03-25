import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './MainArea.css'
const MainArea = () => {
    const [products, setProducts] = useState([])

    useEffect( () => {
        fetch(`shoesData.json`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='row mt-5'>
            <div className="col-lg-10 product-area">
                {
                    products.map(product => <Product key={product.id} productData={product}></Product>)
                }
            </div>
            <div className="col-lg-2 col-sm-12 details-area">
                <h1>Order summary</h1>
            </div>
        </div>
    );
};

export default MainArea;