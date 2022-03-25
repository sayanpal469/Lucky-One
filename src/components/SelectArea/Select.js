import React from 'react';
import './Select.css'
const Select = ({cart}) => {
    return (
        <div className='select'>
            <h4>Select Items: {cart.length}</h4>
            {
                cart.map(singelCart => <li key={singelCart.id}>{singelCart.name}</li>)
            }
            <button className='btn btn-primary mt-5'>Choose For Me</button>
        </div>
    );
};

export default Select;