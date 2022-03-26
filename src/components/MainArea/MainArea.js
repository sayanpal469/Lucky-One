import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Select from '../SelectArea/Select';
import './MainArea.css'
const MainArea = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        const newCart = [...cart, product]
        const check = cart.find(oldItem => oldItem.id === product.id)
        if(!check && newCart.length <=4){
            setCart(newCart)
        }
        else if (check){
            alert("OOPS!! You Can't Add")
        }
        else if(newCart.length > 4) {
            alert("Can't add more than 4")
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
        <div className='row mt-5 p-5 main-container'>
            <div className="col-lg-10 product-area">
                    {
                    products.map(product => <Product key={product.id} productData={product} addToCart={addToCart}></Product>)
                    }
            </div>
            <div className="col-lg-2 selected-area">
                {
                   <Select cart={cart} chooseAgain={chooseAgain}></Select>
                }
            </div>
        </div>
    );
};

export default MainArea;