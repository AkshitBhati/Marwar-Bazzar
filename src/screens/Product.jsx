import React, { useState } from 'react';
import { products } from "../components/Products";
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../redux/productSlice';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  

  const veiwProduct = (productData) => {
    dispatch(removeProduct())
    dispatch(addProduct(productData))
    navigate('/productScreen')
  }
  return (
    <div className="product__wrapper">
      {products.map((product, index) => (
        <div className="product__data" key={index}>
          <img src={product.img} alt="image" />
          <h3>{product.price}</h3>
          
          <button onClick={() => veiwProduct(product)}>veiw product</button>
        </div>
      ))}
    </div>
  );
}

export default Product;
