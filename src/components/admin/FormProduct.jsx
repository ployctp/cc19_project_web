import React, { useEffect, useState } from 'react'
import useEcomStore from '../../store/ecom-store'
import { createProduct } from '../../api/product'


const initialState = {
    title: "",
    description: "",
    price: 0,
    quantity: 0,
    categoryId: "",
    images: [],
}

const FormProduct = () => {
    const token = useEcomStore((state)=> state.token)
    const getCategory = useEcomStore((state)=> state.getCategory)
    const categories = useEcomStore((state)=> state.categories)
    const [form, setForm] = useState(initialState)

    useEffect(()=>{
        getCategory(token)
    },[])

    console.log(categories)

    const handleOnchange = (e) =>{
        console.log(e.target.name, e.target.value)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const res = await createProduct(token, form)
            console.log(res)
        } catch (err) {
            console.log(err)
            
        }
    }

  return (
    <div className="container mx-auto p-4 bg-white shadow-md flex items-center justify-center flex-col gap-3 rounded-lg">
        <form onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold text-center mb-4">เพิ่มข้อมูลสินค้า</h1>
        <input 
        className='border h-8 rounded w-80 p-5'
        value={form.title}
        onChange={handleOnchange}
        placehoder='Title'
        name='Title'
        />
        <input 
        className='border h-8 rounded w-80 p-5'
        value={form.description}
        onChange={handleOnchange}
        placehoder='Description'
        name='description'
        />
        <input 
        type='number'
        className='border h-8 rounded w-80 p-5'
        value={form.price}
        onChange={handleOnchange}
        placehoder='price'
        name='price'
        />
        <input 
        type='number'
        className='border h-8 rounded w-80 p-5'
        value={form.quantity}
        onChange={handleOnchange}
        placehoder='quantity'
        name='quantity'
        />
        <select 
        className="border"
        name='categoryId'
        onChange={handleOnchange}
        required
        >

            <option >Please Select</option>
            {

                categories.map((item,index)=>
                    <option key={index} value={item.id}>{item.name}</option>

                )
            }

           
        </select>
            <hr />
          
        <button className='bg-[#5CB338] hover:bg-[#82ba69] p-3 text-white rounded-lg shadow-sm ' >เพิ่มสินค้า</button>
        </form>
    </div>
  )
}


export default FormProduct