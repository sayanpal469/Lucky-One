import React, { useState } from 'react';
import SingelItem from '../SingelItem/SingelItem';
import './Select.css'
const Select = ({cart, chooseAgain}) => {

    const [randomShoe, setRandomshoe] = useState([])
    const getRandom = (cart) => {
     let randomValue =  cart[Math.floor(Math.random() * cart.length)];
     setRandomshoe(randomValue)   
    }
    

    return (
        <div className='select'>
            <h4>Select Items: {cart.length}</h4>
            {
                cart.map(singelCart => <SingelItem key={singelCart.id} productName={singelCart.name} img={singelCart.picture}></SingelItem>)
            }
                <p className='mt-4 text-center text-light bg-warning p-2'>Your Chooses Item is {randomShoe.name}</p>
            {
                cart.length && <button onClick={() => getRandom(cart)} className='btn btn-primary mt-5 mx-auto'>Choose 1 For Me</button>
            }

            {
                cart.length && <button onClick={chooseAgain} className='btn btn-success mt-5'>Choose Again</button>
            }
        </div>
    );
};

export default Select;