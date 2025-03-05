import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import useEcomStore from "../../store/ecom-store";
import { useNavigate } from "react-router";

const login = () => {
  //code javascript
  const navigate = useNavigate();
  const actionLogin = useEcomStore((state) => state.actionLogin);
  const user = useEcomStore((state) => state.user);
  console.log("user from zustand", user);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await actionLogin(form);
      const role = res.data.payload.role;
      console.log("role", role);
      roleRedirect(role);
      toast.success("Welcome");
    } catch (err) {
      const errMsg = err.response?.data?.message;
      toast.error(errMsg);
    }
  };
  const roleRedirect = (role) => {
    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
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
            <button className="bg-slate-950 w-full  text-white py-2 rounded-lg hover:bg-slate-800 transition">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
