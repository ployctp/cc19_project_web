import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Regiter = () => {
  //code javascript
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit = async(e) =>{
    e.preventDefault()
    if(form.password !== form.confirmPassword){
      return alert('Confirm Password is not match')
    }
    console.log(form)
    try{
      //code
      const res = await axios.post('http://localhost:5001/api/register',form)
      console.log(res.data)
      toast.success(res.data)
    }catch(err){
      const errMsg = err.response?.data?.message
      toast.error(errMsg)
      console.log(err)
    }
  }

  return (
    <div>
      Regiter
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
        Confirm Password
        <input
          className="border"
          onChange={handleOnChange}
          name="confirmPassword"
          type="text"
        />
        <button className="bg-slate-950 rounded text-white">Register</button>
      </form>
    </div>
  );
};

export default Regiter;
