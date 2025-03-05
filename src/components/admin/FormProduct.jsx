import React, { useEffect, useState } from "react";
import useEcomStore from "../../store/ecom-store";
import { createProduct } from "../../api/product";
import { toast } from "react-toastify";
import UploadFile from "./UploadFile";

const initialState = {
  title: "",
  description: "",
  price: 0,
  quantity: 0,
  categoryId: "",
  images: [],
};

const FormProduct = () => {
  const token = useEcomStore((state) => state.token);
  const getCategory = useEcomStore((state) => state.getCategory);
  const categories = useEcomStore((state) => state.categories);
  const getProduct = useEcomStore((state) => state.getProduct);
  const products = useEcomStore((state) => state.products) || [];

  const [form, setForm] = useState(initialState);

  useEffect(() => {
    getCategory(token);
    getProduct(token, 20);
  }, []);

  console.log(categories);
  console.log(products);

  const handleOnchange = (e) => {
    // console.log(e.target.name, e.target.value)
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createProduct(token, form);
      console.log(res);
      toast.success(`Added ${res.data.title} Success`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-md flex items-center justify-center flex-col gap-5 rounded-lg w-lg">
      <form onSubmit={handleSubmit} className="w-full">
        <h1 className="text-2xl font-semibold text-center mb-6 text-slate-950 ">
          Add Product Information
        </h1>
        <input
          className="border h-7 rounded w-full p-3 mb-4 bg-slate-100 text-slate-950 "
          value={form.title}
          onChange={handleOnchange}
          placehoder="Title"
          name="title"
        />
        <input
          className="border h-7 rounded w-full p-3 mb-4 bg-slate-100 text-slate-950 "
          value={form.description}
          onChange={handleOnchange}
          placehoder="Description"
          name="description"
        />
        <input
          type="number"
          className="border h-7 rounded w-full p-3 mb-4 bg-slate-100 text-slate-950 "
          value={form.price}
          onChange={handleOnchange}
          placehoder="price"
          name="price"
        />
        <input
          type="number"
          className="border h-7 rounded w-full p-3 mb-4 bg-slate-100 text-slate-950 "
          value={form.quantity}
          onChange={handleOnchange}
          placehoder="quantity"
          name="quantity"
        />
        <select
          className="border h-7 rounded w-full p-3 mb-4 bg-slate-100 text-slate-950 "
          name="categoryId"
          onChange={handleOnchange}
          required
          value={form.categoryId}
        >
          <option value="" disabled>
            Please Select{" "}
          </option>
          <option>Please Select</option>
          {categories.map((item, index) => (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        
          {/* Upload File */}
          <UploadFile form={form} setForm={setForm}/>
        

          <hr />

        <button className="w-full bg-[#5CB338] hover:bg-[#82ba69] p-3 text-white rounded-lg shadow-sm ">
          Add Product
        </button>
        <hr />
        <div className="overflow-y-auto max-h-96 h-96 border rounded-lg shadow-md">
        
  <table className="table table-xs w-full">
    <thead>
      <tr className="text-slate-900">
        <th scope="col">Number</th> 
        <th scope="col">Name</th> 
        <th scope="col">Description</th> 
        <th scope="col">Price</th> 
        <th scope="col">Unit Sold</th> 
        <th scope="col">Last Update</th> 
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        products.map((item, index) => {  
            
          return (
            
            <tr className="text-slate-900" key={item.id}> 
              <th scope="row">{index + 1}</th> 
              <td>{item.title}</td> 
              <td>{item.description}</td> 
              <td>{item.price}</td> 
              <td>{item.quantity}</td> 
              <td>{item.updatedAt}</td> 
              <td>
               
                <button className="bg-blue-500 text-white p-2 rounded mr-2" onClick={() => handleEdit(item)}>
                  Edit
                </button>
               
                <button className="bg-red-500 text-white p-2 rounded" onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })
      }
    </tbody>
   
  </table>
</div>

       
      </form>
    </div>
  );
};

export default FormProduct;