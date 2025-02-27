import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import useEcomStore from "../../store/ecom-store";
import { useNavigate } from "react-router";


const login = () => {
  //code javascript
  const navigate = useNavigate()
  const actionLogin = useEcomStore((state)=>state.actionLogin)
  const user = useEcomStore((state)=>state.user)
  console.log('user from zustand',user)



  const [form, setForm] = useState({
    email: "",
    password: "",
   
  });

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit = async(e) =>{
    e.preventDefault()
    try{

      const res = await actionLogin(form)
      const role =res.data.payload.role
      console.log('role',role)
      roleRedirect(role)
      toast.success('Welcome')
    }catch(err){
      const errMsg = err.response?.data?.message 
      toast.error(errMsg)
    }
  }
  const roleRedirect = (role) =>{
    if(role === 'admin'){
      navigate('/admin')
    }else{
      navigate('/user')
    }
  }

  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
        Email
        <input
          className="border"
          onChange={handleOnChange}
          name="email"
          type="email"
        />
        Password
        <input
          className="border"
          onChange={handleOnChange}
          name="password"
          type="text"
        />
       
        <button className="bg-slate-950 rounded text-white">Login</button>
      </form>
    </div>
  );
};

export default login;
