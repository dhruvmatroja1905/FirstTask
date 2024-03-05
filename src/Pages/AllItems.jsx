
import React, { useState } from 'react'



import axios from 'axios'
import api from '../API/JsonApi'
import { Navbar } from 'reactstrap';

const AllItems = () => {


  const initialproduct = { title: '', description: "", price: '', categoryId: '', image: "" }

  const [newProduct, setNewProduct] = useState(initialproduct);



  const handleInputChange = (e) => {



    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.warn(newProduct);
      const response = await api.post('/Product', newProduct);
      console.log('Product created:', response.data);

    } catch (error) {
      console.error('Error creating product:', error);
    }
  };



  



  return (
    <div>

      <Navbar />
      <div className='bg-white items-center border shadow-lg rounded-lg mt-15 mx-5 mb-10 px-5'>
        <h2 className="text-lg font-semibold">Create New Product</h2>

        <form >
          <label>Title</label>
          <input type='text' placeholder='Title' name='title' value={newProduct.text} onChange={handleInputChange} className="w-full border border-gray-300 rounded px-2 py-1 mt-2"></input>

          <textarea name='description' value={newProduct.description} onChange={handleInputChange} className="w-full border border-gray-300 rounded px-2 py-1 mt-2"></textarea>

          <input type='number' placeholder='Price' name='price' value={newProduct.price} onChange={handleInputChange} className="w-full border border-gray-300 rounded px-2 py-1 mt-2"></input>


          <input type='number' placeholder='CategoryId' name='categoryId' value={newProduct.categoryId} onChange={handleInputChange} className="w-full border border-gray-300 rounded px-2 py-1 mt-2"></input>

          <input
            type="url"
            name="image"
            onChange={handleInputChange}

            className="w-full border border-gray-300 rounded px-2 py-1 mt-2"
          />


          <button type="submit" onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600">Create</button>


        </form>

      </div>
    </div>
  )
}

export default AllItems

