import React, { useEffect, useState } from 'react';
import  { useSelector } from "react-redux"


const CartTotal = () => {
    const [price, setPrice] = useState([])

    const cartTotal = useSelector((state) => state.cart)
   

   useEffect(() => {
    cartTotal.map((total) => {
      const totalPrice = parseFloat(total.price)
      setPrice(totalPrice)
     })
   }, [cartTotal])
    console.log(typeof(price))

  return (
    <div className='cartTotal__wrapper'>
      <h2>Cart Total</h2>
      <div>
        <div>
          <p>Shipping - </p>
          <h3>Total - </h3>
        </div>
        <div>
          <p>100</p>
          <h3>{(price) + 100}</h3>
        </div>
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default CartTotal;