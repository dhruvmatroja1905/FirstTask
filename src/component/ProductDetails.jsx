import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import api from '../API/JsonApi';

import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,removeSelectedProduct} from "../Redux/Action/productAction";

const ProductDetails = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);


  let product = useSelector((state) => state.product);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/Product/${productId}`);
        console.log('SELECTED_PRODUCT',response.data)
        setProductData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    dispatch(selectedProduct(product));
    fetchData();
  }, [productId]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-10 flex flex-wrap justify-center items-center">
      <div className="w-full md:w-1/2 lg:max-w-md">
        <img className="w-full" src={productData.images} alt={productData.title} />
      </div>

      <div className="w-full md:w-1/2 px-4 py-6">
     
        <h2 className="text-2xl font-bold">{productData.title}</h2>
        <p className="text-gray-700 text-base mt-2">{productData.description}</p>
        <p className="text-red-600 font-bold text-xl mt-4">${productData.price}</p>
      
        <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          <FiShoppingCart className="mr-2" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
