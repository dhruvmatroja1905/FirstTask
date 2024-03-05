import React , {useEffect, useState}from 'react'
import Featuregrid from '../section/Featuregrid'

import feature_img1 from '../assets/feature_img1.jpg'
import feature_img2 from '../assets/feature_img2.jpg'
import feature_img3 from '../assets/feature_img3.jpg'
import feature_img4 from '../assets/feature_img4.jpg'
import Aboutgrid from '../section/Aboutgrid'

import axios from 'axios'

const About = () => {

    const [userData, setData] = useState([])


    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get('https://mocki.io/v1/71fda806-1833-410e-8ef8-5bb88caad3fb');
                console.log(response);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, [])


  
    return (
        <section className='w-5/7 h-100 bg-slate-100 flex flex-col lg:flex-row gap-1/2 lg:gap-20  px-7 py-4 lg:px-16 lg:py-12  '>

            <div className='flex justify-between items-center w-full lg:w-1/2 flex-wrap'>

                {userData.map((data) => (
                    <div key={data.id} className='w-full gap-10 lg:w-1/2'>
                        <Aboutgrid  {...data} />
                    </div>
                ))}

            </div>


            <div className='flex justify-top mt-20 items-start flex-col gap-10 lg:w-[30%] bg-slate-100  rounded-lg '>
                <h1 className=' text-6xl ml-3'>Unique code, scripts and plugins made by world-class creators</h1>



                <div className='flex justify-center items-center gap-7 ml-5'>
                    <button className='bg-[#5e8d25] text-white px-8 py-3 rounded-md text-[18px] border-b-2 border-b-[#436717]  '>View All Code</button>

                </div>
            </div>


        </section>
    )
}

export default About






{/* const aboutgrids = [
        {
            id:'1',
            image: feature_img1,
            heading: 'etfgdyuh',
            text: 'khugjyftdgrxfcgvjh',
            rating: '(254)'

        },

        {
            id:'2',
            image: feature_img2,
            heading: 'etfgdyuh',
            text: 'khugjyftdgrxfcgvjh',

            rating: '33rating'


        },

        {
            id:'3',
            image: feature_img3,
            heading: 'etfgdyuh',
            text: 'khugjyftdgrxfcgvjh',

            rating: '33rating'


        },

        {
            id:'4',
            image: feature_img4,
            heading: 'etfgdyuh',
            text: 'khugjyftdgrxfcgvjh',

            rating: '33rating'


        }
    ]*/}
