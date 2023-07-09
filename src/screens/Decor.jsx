import { v4 as uuidv4 } from "uuid"
import { useNavigate } from "react-router-dom"
import { addProduct, removeProduct } from "../redux/productSlice"
import { useDispatch } from "react-redux"

const Decor = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const data = [ {
        id:uuidv4(),
        category:"decor",
        name:"Kuthputli",
        img:"https://m.media-amazon.com/images/I/81dr5ChHAJL._SL1500_.jpg",
        price:"₹1300",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus iure nostrum amet cumque assumenda ex, quas, eum et ipsum quae unde maxime ipsa, tenetur officiis odit commodi magni at beatae nemo repudiandae libero? Animi.",
    
    },
    {
        id:uuidv4(),
        category:"decor",
        name:"Wall decor",
        img:"https://images.saatchiart.com/saatchi/1818029/art/8562334/7626158-HSC00001-7.jpg",
        price:"₹2200",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus iure nostrum amet cumque assumenda ex, quas, eum et ipsum quae unde maxime ipsa, tenetur officiis odit commodi magni at beatae nemo repudiandae libero? Animi.",
    
    },
    {
        id:uuidv4(),
        category:"decor",
        name:"showpeice",
        img:"https://5.imimg.com/data5/PX/RW/MY-3564861/saarthi-wooden-rajasthani-decorative-ethnic-handicraft-traditional-chowkidar-dwarpal-500x500.png",
        price:"₹700",
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

export default Decor
