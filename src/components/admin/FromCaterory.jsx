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
  const [name, setName] = useState("");

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategory(token);
  }, []);

  const getCategory = async (token) => {
    try {
      const res = await listCategory(token);
      setCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  };

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
      <h1 className="text-2xl font-semibold text-center mb-4">
        Category Management
      </h1>
      <form className="my-4" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          className="border h-8 rounded w-80 p-5"
          type="text"
        />
        <button
          className="bg-[#5CB338] hover:bg-[#82ba69] p-3 text-white rounded-lg shadow-sm 
         "
        >
          Add Category
        </button>
      </form>
      <hr />
      <ul className="list-none">
        {categories.map((item, index) => (
          <li className="flex justify-between my-2" key={index}>
            <span>{item.name}</span>
            <button
              className="bg-red-500 hover:bg-red-400 text-white p-2 rounded-lg"
              onClick={() => handleRemove(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FromCaterory;
