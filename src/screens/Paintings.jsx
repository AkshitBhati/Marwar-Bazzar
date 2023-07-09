import { v4 as uuidv4 } from "uuid"
import { useNavigate } from "react-router-dom"
import { addProduct, removeProduct } from "../redux/productSlice"
import { useDispatch } from "react-redux"

const Paintings = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const data = [ {
        id:uuidv4(),
        category:"painting",
        name:"Queen in Gardern",
        img:"https://j3k5s6s3.rocketcdn.me/wp-content/uploads/2021/07/Phad-painting-Abishek-Joshi-18.jpeg",
        price:"₹2000",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus iure nostrum amet cumque assumenda ex, quas, eum et ipsum quae unde maxime ipsa, tenetur officiis odit commodi magni at beatae nemo repudiandae libero? Animi.",
        
    },
    {
        id:uuidv4(),
        category:"painting",
        name:"Ghoomar Painting",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDYctZphR2mOJuoXMLw4rhDH8UyDxDlcO3HMgDGmp_1g&s",
        price:"₹4000",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus iure nostrum amet cumque assumenda ex, quas, eum et ipsum quae unde maxime ipsa, tenetur officiis odit commodi magni at beatae nemo repudiandae libero? Animi.",
        
    }, 
    {
        id:uuidv4(),
        category:"painting",
        name:"Potrait",
        img:"https://imagecreation.in/image/cache/catalog/products/Rajasthani%20Square/RS-2734-500x500.png",
        price:"₹3800",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus iure nostrum amet cumque assumenda ex, quas, eum et ipsum quae unde maxime ipsa, tenetur officiis odit commodi magni at beatae nemo repudiandae libero? Animi.",
    
    }]
    
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

export default Paintings
