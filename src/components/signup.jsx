import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [userName,setUserName] = useState("")
  const [pass,setPass] = useState("")
  let nav = useNavigate()

  async function pushData(){
    let obj = {
      user : userName,
      pass : pass
    }

    let res = await fetch('http://localhost:3000/user',{
      method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
    })
    let data = await res.json()
    alert("SignUp succesful")
    nav('/')

  }
  return (
    <div>
      <h1>signup</h1>
      <input type='text' placeholder='UserName' onChange={(e)=>{setUserName(e.target.value)}} />
      <input type='password' placeholder='Password' onChange={(e)=>{setPass(e.target.value)}} />
      <button onClick={pushData}>Submit</button>
      <p>Already have a Account <Link to="/Login">Login</Link></p>
      {/* <p><Link to="/Login">Login</Link></p> */}
    </div>
  )
}

export default SignUp