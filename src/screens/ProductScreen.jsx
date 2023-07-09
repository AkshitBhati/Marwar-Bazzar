import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeProduct } from '../redux/productSlice'
import { add } from '../redux/cartSlice'
import { toast } from 'react-hot-toast'

const ProductScreen = () => {
    const navigate = useNavigate()

    const productData = useSelector((state) => state.product)
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const handler = () => {
        navigate('/products')   
        dispatch(removeProduct())
    }

    const addCart = (prodcutData) => {
      dispatch(add(prodcutData))
      toast.success("item added to cart")
      navigate("/cart")
    }

  return (
    <div className='productScreen__wrapper'>

      <button onClick={handler}>Back</button>
      { 
        productData.map((product) =>(
          <div >
          <img src={product.img} alt="" />
          <div>
          <h3>{product.name}</h3>
          <h2>{product.price}</h2>
          <p>{product.description}</p>
          <button onClick={() => addCart(product)}>add to cart</button>
          </div>
          </div>
        ))
      }
    </div>

    
  )
}

export default ProductScreen
