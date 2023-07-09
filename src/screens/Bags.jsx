import { v4 as uuidv4 } from "uuid"
import { useNavigate } from "react-router-dom"
import { addProduct, removeProduct } from "../redux/productSlice"
import { useDispatch } from "react-redux"

    const data = [{
        id:uuidv4(),
        category:"bags",
        name:"Cotton Bag",
        img:"https://m.media-amazon.com/images/I/51GvmTqXyrL.jpg",
        price:"₹1200",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus iure nostrum amet cumque assumenda ex, quas, eum et ipsum quae unde maxime ipsa, tenetur officiis odit commodi magni at beatae nemo repudiandae libero? Animi.",
    
    },
    {
        id:uuidv4(),
        category:"bags",
        name:"Cotton Bag",
        img:"https://4.imimg.com/data4/HU/DN/MY-5915878/embroidery-rajasthani-bag-500x500.jpg",
        price:"₹1800",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus iure nostrum amet cumque assumenda ex, quas, eum et ipsum quae unde maxime ipsa, tenetur officiis odit commodi magni at beatae nemo repudiandae libero? Animi.",
    
    },
    {
        id:uuidv4(),
        category:"bags",
        name:"Cotton Bag",
        img:"https://n4.sdlcdn.com/imgs/a/6/e/India-Pride-Handicraft-Blue-Jhola-SDL745690880-1-ff1f8.jpg",
        price:"₹1000",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus iure nostrum amet cumque assumenda ex, quas, eum et ipsum quae unde maxime ipsa, tenetur officiis odit commodi magni at beatae nemo repudiandae libero? Animi.",
    
    }]

const Bags = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handler = (productData) => {
        navigate('/productScreen')
        dispatch(removeProduct())
        dispatch(addProduct(productData))
    }

    return (
        <div className='category__wrapper'>
        {
            data.map((product) => (
                <div className="product__container">
                <img src={product.img} />
                <div>
                <h3>{product.price}</h3>
                <h4>{product.name}</h4>
                <button onClick={() => handler(product)}>view product</button>
                </div>
                </div>
            ))
        }
    </div>
    )
}

export default Bags