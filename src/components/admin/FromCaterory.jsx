import React, { useEffect, useState } from "react";
import {
  createCategory,
  listCategory,
  removeCategory,
} from "../../api/Category";
import useEcomStore from "../../store/ecom-store";
import { toast } from "react-toastify";

const FromCaterory = () => {
  const token = useEcomStore((state) => state.token);
  const [name, setName] = useState("")
  // const [categories, setCategories] = useState([]);

  const categories = useEcomStore((state)=>state.categories)
  const getCategory = useEcomStore((state)=>state.getCategory)
  useEffect(() => {
    getCategory(token);
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      return toast.warning(`Please fill data`);
    }
    try {
      const res = await createCategory(token, { name });
      console.log(res);
      toast.success(`Add Category ${res.data.name} success`);
      getCategory(token);
    } catch (err) {
      console.log(err);
    }
  };
  const handleRemove = async (id) => {
    console.log(id);
    try {
      const res = await removeCategory(token, id);
      console.log(res);
      toast.success(`Deleted ${res.data.name} success`);
      getCategory(token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-white shadow-md flex items-center justify-center flex-col gap-3 rounded-lg">
      <h1 className="text-2xl font-bold text-center  mb-6 text-slate-950">
        Category Management
      </h1>
      <form className="w-full" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 bg-gray-50  rounded-md w-full p-4 mb-4 text-slate-950"
          type="text"
        />
        <button
          className="bg-[#5CB338] hover:bg-[#82ba69] text-white p-3 w-full rounded-lg shadow-md 
         "
        >
          Add Category
        </button>
      </form>
      <hr />
      <ul className="list bg-base-100 rounded-box shadow-md w-full">
  {categories.map((item, index) => (
    <li className="list-row items-center p-4" key={index}>
      <div className="flex items-center">
        
      </div>
      <div className="list-col-grow">
        <div className="text-lg font-semibold">{item.name}</div>
      
      </div>
      <button
        className="btn btn-square btn-ghost"
        onClick={() => handleRemove(item.id)}
      >
        <svg fill="#ffffff" viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"></path></g></svg>
      </button>
    </li>
  ))}
</ul>

    </div>
  );
};

export default FromCaterory;
