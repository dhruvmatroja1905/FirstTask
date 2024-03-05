import React, { useEffect, useState } from 'react';
import { GiShoppingCart } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchProductsRequest, updateCartQuantity } from '../Redux/Action/productAction';

const Product = () => {
  const products = useSelector((state) => state.allProducts.products);

  const cart = useSelector(state => state.cart);
  const product = useSelector (state => state.cart)
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);


  const handleAddToCart = (data) => {
    dispatch(addToCart(data)); // Dispatch action to add item to cart
    dispatch(updateCartQuantity((cart && cart.length) ? cart.length + 1 : 1)); // Update cart quantity
    console.log('addtocart', data);
};


  useEffect(() => {
    dispatch(fetchProductsRequest()); // Dispatch action to trigger saga
  }, [dispatch]);

  useEffect(() => {
    setUserData(products); // Update userData state variable with products fetched from Redux store

    console.log('SET_PRODUCT',products)
  }, [products]);

 
  return (
    <div className='bg-slate-100 grid grid-cols-1 lg:grid-cols-4 gap-[2px] pt-10'>
      {userData.map((data) => (
        <div key={data.id} className='bg-white items-center border shadow-lg rounded-lg hover:scale-105 duration-300 mt-15 mx-5 mb-10 px-70'>
          <img src={data.images} alt='' className='w-full h-[200px] object-cover rounded-t-lg' />
          <div className='flex justify-between px-2 py-4'>
            <Link to={`/product/${data.id}`}>
              <div className='grid w-[50%]'>
                <p className='font-bold'>{data.title}</p>
                <p className='text-gray-500'>
                  {data.description.split(' ').slice(0, 10).join(' ')}
                  {data.description.split(' ').length > 50 ? '...' : ''}
                </p>
                <p className='font-bold text-2xl'>${data.price}</p>
              </div>
            </Link>
            <div className='py-5 px-3 mt-5'>
              <button className='text-4xl px-2 hover:text-white border border-gray-600 hover:bg-gray-500'  onClick={() => handleAddToCart(data)}>
                <GiShoppingCart />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
