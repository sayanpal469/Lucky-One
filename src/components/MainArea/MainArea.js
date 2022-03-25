import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Select from '../SelectArea/Select';
import './MainArea.css'
const MainArea = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        const newCart = [...cart, product]
        if(newCart.length <= 4) {
            setCart(newCart)
        } else {
            alert('More than 4')
        }
    }

    const chooseAgain = () => {
        setCart([])
    }
    useEffect( () => {
        fetch(`shoesData.json`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='row mt-5 p-5'>
            <div className="col-lg-10 product-area">
                {
                    products.map(product => <Product key={product.id} productData={product} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="col-lg-2 col-sm-12 selected-area">
                {
                   <Select cart={cart} chooseAgain={chooseAgain}></Select>
                }
            </div>
        </div>
    );
};

export default MainArea;