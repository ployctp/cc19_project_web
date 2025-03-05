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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-gray-700">Email</label>
        <input
          className="w-full px-3 py-2 border rounded-lg "
          onChange={handleOnChange}
          name="email"
          type="email"
        />
        <label className="block text-gray-700">Password</label>
        <input
          className="w-full px-3 py-2 border rounded-lg "
          onChange={handleOnChange}
          name="password"
          type="text"
        />
        <label className="block text-gray-700">Comfirm Password</label>
        <input
          className="w-full px-3 py-2 border rounded-lg "
          onChange={handleOnChange}
          name="confirmPassword"
          type="text"
        />
        <button className="bg-slate-950 w-full  text-white py-2 rounded-lg hover:bg-slate-800 transition">Register</button>
      </form>

      </div>
    </div>
  );
};

export default Regiter;
