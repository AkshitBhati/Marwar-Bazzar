import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../config"
import { toast } from 'react-hot-toast'


const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [err, setErr] = useState("")

  const loginHandler = () => {
    if (email === "" || password === "") {
      toast.error("Fill all fields");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(async(userCredentials) => {
          navigate('/')
          toast.success("logedin successfully")
        })
        .catch((error) => {
          
          if (error.code === "auth/invalid-email") {
            setErr("Invalid email format");
          } else if (error.code === "auth/wrong-password") {
            setErr("Password should be at least 6 characters");
          } else{
          setErr("User not found")  
          }
          // console.log(error)
        })
        
    }
  };

  const guestLogin = () => {
    setEmail("akshitworks24@gmail.com")
    setPassword("@kshitbh@ti44")
    
  }

  
  return (
    <div className='login__wrapper'>
        <h1>Login</h1>
        <label>Email</label>
        <input type="text" className='login__email' value = {email} onChange={(e) => setEmail(e.target.value) }/>
        <label >Password</label>
        <input type="password" className='login__password'  value = {password} onChange={(e) => setPassword(e.target.value) }/>
        {err && <p className="login__error">{err}</p>}
        <button type='submit' className='login__btn' onClick={loginHandler}>LOGIN</button>
        <button type='submit' className='login__btn' onClick={guestLogin}>GUEST CREDENTIALS</button>
        <h4>Dont have an account? <Link to="/register"><span>Register</span></Link></h4>
    </div>
  )
}

export default Login
