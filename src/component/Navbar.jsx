import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart , updateCartQuantity} from '../Redux/Action/productAction';

const nav_links = [
    {
        title: "Home",
        link: "/home"
    },
    {
        title: "All Items",
        link: "/all items"
    },
    {
        title: "HTML",
        link: "/html"
    },
    {
        title: "CSS",
        link: "/css"
    },
    {
        title: "REACT",
        link: "/react"
    },
    {
        title: "JavaScript",
        link: "/javascript"
    },
    {
        title: "PHP",
        link: "/php"
    },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const image = 'https://robohash.org/Jeanne.png?set=set4';
    const [userData, setUserData] = useState(image);
    const cart = useSelector(state => state.cart) || [];
    const dispatch = useDispatch();

    
    const cartQuantity = cart.length; // Calculate the cart quantity
    
    const handleAddToCart = (data) => {
        dispatch(addToCart(data)); // Dispatch action to add item to cart
        // Calculate the updated cart quantity dynamically from the current cart state
    };
    
    const updatedCart = useSelector(state => state.cart) || [];
    const updatedCartQuantity = updatedCart.length;
    dispatch(updateCartQuantity(updatedCartQuantity)); // Update cart quantity

    const handleMenu = () => {
        setOpen(prev => !prev);
    };

    return (
        <div className="bg-slate-30 h-35">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14">
                    <div className="flex items-center">
                        <a href="/" className="text-black">
                            Navbar
                        </a>

                        {localStorage.getItem('user-info') ? (
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {nav_links.map((link, index) => (
                                        <NavLink key={index} className="text-grey-700 text-[18px] hover:bg-gray-700 hover:text-white px-3 py-2 round mb-3" to={link.link}>
                                            {link.title}
                                        </NavLink>
                                    ))}
                                    <Link to="/profile" className="flex items-center">
                                        <img src={userData} alt="Profile" className="w-8 h-8 rounded-full mt-3" />
                                    </Link>
                                    <button className="text-3xl" onClick={() => handleAddToCart(true)}>
                                        <GiShoppingCart />
                                    </button>
                                    <span className="badge text-2xl ">{cartQuantity}</span>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4 ml-auto">
                                <div className="md:hidden lg:flex space-x-1 px-2">
                                    <button className="text-2xl text-grey-700 hover:bg-gray-700 hover:text-white px-5 py-1 rounded-md border-2 border-gray-800 hidden md:block">
                                        <Link to="/login">Login</Link>
                                    </button>
                                    <button className="text-2xl text-grey-700 hover:bg-gray-700 hover:text-white px-5 py-1 rounded-md border-2 border-gray-800 hidden md:block">
                                        <Link to="/register">Register</Link>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mt-2 flex md:hidden">
                        <button type="button" onClick={handleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-grey-800 rocus:ring-white">
                            <span className="sr-only">Open Main Menu</span>
                            {open === true ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {open && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {nav_links.map((link, index) => (
                            <Link key={index} className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to={link.link}>
                                {link.title}
                            </Link>
                        ))}
                        <div className="md:hidden flex flex-col mt-4 items-start justify-items-start gap-4">
                            <button className="w-full text-grey-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md border-2 border-gray-800">
                                <Link to="/login">Login</Link>
                            </button>
                            <button className="w-full text-grey-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md border-2 border-gray-800">
                                <Link to="/register">Register</Link>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
