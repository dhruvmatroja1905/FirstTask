import React, { useEffect, useState } from 'react'
import CategoryCard from '../section/CategoryCard'
import axios from 'axios'

import api from '../API/JsonApi'







const Category = () => {


    const [userData, setData] = useState([])


    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await api.get('/Category');
                console.log(response);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, [])


    return (
        <div className='pt-16 bg-slate-100'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <h1 className='text-4xl font-semibold'>Check out our newest code, scripts, and templates</h1>
                    <p className='mt-5 max-w-2xl mx-auto text-xl text-gray-500'>
                        We carefully review new entries from our community one by one to make sure they meet high-quality design and functionality standards. From PHP scripts to Bootstrap skins, you’re always sure to find high-quality assets created by brilliant professionals.
                    </p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-10'>
                    {userData.map((data) => (
                        <CategoryCard
                            key={data.id}
                            name={data.category_name}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Category






