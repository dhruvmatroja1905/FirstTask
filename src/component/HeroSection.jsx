import React,{useEffect , useState} from 'react'
import hero_img from '../assets/hero_img.jpg'
import { FiSearch } from 'react-icons/fi'
import Navbar from './Navbar'
import axios from 'axios'

const HeroSection = () => {




    const [userData, setData] = useState([])


    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get('https://mocki.io/v1/d230398a-32fe-4bb0-84c4-112990dbddcb');
                console.log(response);
                setData(response.data.object_1);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, [])

    return (
        
      
        <section className='flex flex-col lg:flex-row  justify-between items-center gap-4 w-full bg-slate-100 h-auto lg:h-screen'>


            <div className='flex justify-center items-start flex-col gap-8 lg:w-1/2 px-10 py-10 lg:px-20 lg:py-20'>
                <h1 key={userData.id} className='text-gray-800 font-bold text-4xl lg:text-6xl mg:text-1xl'>{userData.heading}</h1>

                <p  key={userData.id}  className='text-slate-90 text-2xl'>{userData.paragraph}</p>


                {/*search bar*/}

                
                <div className='w-11/12 h-auto md:w-812/ xl:w-150 bg-white p-5 rounded-3xl'>
                    <section className='w-full h-10 flex items-center'>
                        <span className='w-10 h-full '><FiSearch className='mt-2 font-bold text-cyan-600 text-2xl' /></span>

                        <input type='text' className='w-full h-full font-medium md:pl-2 focus:outline-none' placeholder='e.g:-JavaScript'></input>

                        <button className='w-[150px] h-[120%] bg-[#5e8d25] flex justify-center items-center rounded-2xl text-white font-small text-2xl'>Search</button>



                    </section>

                </div>
            </div>

            <div className='  flex justify-center items-center w-1/2 px-5 py-20 object-cover'>

                <img src={hero_img} alt='hero image' width={500} height={500} />

            </div>

        </section>
    )
}

export default HeroSection
