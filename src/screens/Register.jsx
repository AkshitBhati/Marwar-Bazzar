import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { auth } from "../config";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  const [err, setErr] = useState("");


  const handler = () => {
    if (email === "" || name === "" || password === "") {
      toast.error("Fill all fields");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async(userCredentials) => {
          const user = userCredentials.user;
         await updateProfile(user, {
            displayName:name
          })
          
          setUser(user);
          toast.success("registered successfully")
          navigate('/')
        })
        .catch((error) => {
          
          if (error.code === "auth/invalid-email") {
            setErr("Invalid email format");
          } else if (error.code === "auth/weak-password") {
            setErr("Password should be at least 6 characters");
          } else {
            setErr("Email already in use.");
          }
        })
        
    }
  };
  console.log(user)
   

  return (
    <>
    
    <div className='register__wrapper'>
      <h1>Register</h1>

      <label>Name</label>
      <input type="text" className='register__name' onChange={(e) => setName(e.target.value)} />
      <label>Email</label>
      <input type="email" className='register__email' onChange={(e) => setEmail(e.target.value)} />
      <label>Password</label>
      <input type="password" className='register__password' onChange={(e) => setPassword(e.target.value)} />

      {err && <p className="register__error">{err}</p>}

      <button type='submit' className='register__btn' onClick={handler}>Register</button>
      <h4>Already have an account? <Link to="/login"><span>Login?</span></Link></h4>
    </div>
    </>
  );
};


export default Register;
console.log(Register.name)
