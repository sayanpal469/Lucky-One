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
        <div className='container-fluid'>
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

        <div className='row question-area container mb-5'>
            <div className="col-lg-5 col-sm-12 shadow p-5 m-2">
                <article>
                    <h3>How React Works?</h3>
                    <p>ReactJS is an open-source, component-primarily based totally the front quit library accountable best for the view layer of the software. It is maintained through Facebook. React makes use of a declarative paradigm that makes it simpler to motive approximately your software and pursuits to be each green and flexible.</p>
                </article>
            </div>
            <div className="col-lg-5 col-sm-12 shadow p-5 ms-2">
            <article>
                    <h3>How useState Works?</h3>
                    <p>UseState is a hook that helps you to upload nation to a purposeful component. It accepts a controversy that is the preliminary cost of the nation assets and returns the modern cost of nation assets and a technique that is able to updating that nation assets</p>
                </article>
            </div>
            </div>
        </div>

    );
};

export default MainArea;