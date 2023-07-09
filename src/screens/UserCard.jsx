import { toast } from "react-hot-toast"
import { auth } from "../config"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"

const UserCard = ({ name }) => {
    const navigate = useNavigate()
    const signoutHandler = () => {
        signOut(auth).then(() => {
            toast.success("User logout successfull")
            navigate('/')
        }).catch(err => toast.error("logout failed")) 
    } 
  return (
    <div className='card__wrapper'>
        <img src="https://cdn-icons-png.flaticon.com/512/219/219970.png" alt="user" />
        <h2>{name}</h2>
        <button onClick={signoutHandler}>Logout</button>
    </div>
  )
}

export default UserCard
