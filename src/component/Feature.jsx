import React, {useEffect, useState} from 'react'
import Featuregrid from '../section/Featuregrid'
import api from '../API/JsonApi'

import axios from 'axios'


const Feature = () => {


  const [userData, setData] = useState([])


  useEffect(() => {


    const fetchData = async () => {
      try {
        const response = await api.get('/Feature');
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, [])


  return (
    <section className='w-full bg-slate-100 flex flex-col lg:flex-row  lg:gap-20 h-fit px-7 py-4 lg:px-16 lg:py-12 '>

      <div className='flex justify-center flex-col gap-4 lg:w-[30%]  bg-white rounded-lg ' >

     
        <h1 className=' text-6xl ml-20 mr-20 mt-50'>Feature Code</h1>

        <p className='text-gray-800 text-2xl ml-20 mr-20'>Every week, our staff personally hand-pick some of the best new code, scripts and plugins from our collection.</p>

        <div className='flex justify-center items-center gap-7 '>
          <button className=' bg-[#5e8d25] text-white   px-7 py-3 rounded-md text-[18px]   border-b-2 border-b-[#436717] '>View All Feature Code Items</button>

        </div>
      </div>


      <div className='flex justify-between w-full items-center h-fit lg:w-3/4 flex-wrap '>

        {userData.map((data) => (
            <div key={data.id} className=' lg:w-1/2  w-full gap-4 hover:scale-105 duration-300'>
              <Featuregrid  {...data} />
            </div>
          ))}

      </div>


    </section>
  )
}

export default Feature


{/*const featuregrids = [
    {
        image:feature_img1,
          headding:'etfgdyuh',
        text:'khugjyftdgrxfcgvjh',
        label:'Live Preview',
        price:'$19',
        sales:'33sales',
        reviews:'[]',
        avgRating: '4.5'

    },

    {
        image:feature_img2,
        headding:'etfgdyuhgfhtyjukjiukyft',
        text:'khugjyftdgrxfcgvjh',
        label:'Live Preview',
        price:'$19',
        sales:'33sales',
        reviews:'[]',
        avgRating: '4.5'

    },

    {
        image:feature_img3,
        headding:'etfgdyuh',
        text:'khugjyftdgrxfcgvjh',
        label:'Live Preview',
        price:'$19',
        sales:'33sales',
        reviews:'[]',
        avgRating: '4.5'
    },

    {
        image:feature_img4,
        headding:'etfgdyuh',
        text:'khugjyftdgrxfcgvjh',
        label:'Live Preview',
        price:'$19',
        sales:'33sales',
        reviews:'[]',
        avgRating: '4.5'

    }
]*/}
