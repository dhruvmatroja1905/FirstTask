import React from 'react'
import {FaGithub,FaLinkedinIn,FaTwitter,FaInstagram} from "react-icons/fa"






const year = new Date().getFullYear()
const Footer = () => {
  return (
    <footer className='relative text-white bg-gray-600'>

    <div >
      <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols p-20 border-b-4  border-gray-900'>

        <div flex flex-col gap-5>
          <h2 className='text-2xl text-gray-800'>ENVATO MARKET</h2>
          <ul>
            <li className='my-4 list-none hover:underline decoration-white cursor-pointer'>Term </li>
            <li className='my-4 list-none hover:underline decoration-white cursor-pointer'>Licence</li>
            <li className='my-4 list-none hover:underline decoration-white cursor-pointer'>Market API</li>
            <li className='my-4 list-none hover:underline decoration-white cursor-pointer'>Become an Affiliate</li>
          </ul>
        </div>


        <div flex flex-col gap-5>
          <h2 className='text-2xl text-gray-800'>HELP</h2>
          <li className='my-4 list-none hover:underline decoration-white cursor-pointer'>Help Center</li>
          <li className='my-4 list-none hover:underline decoration-white cursor-pointer'>Authors</li>

        </div>


        <div flex flex-col gap-5>
          <h2 className='text-2xl text-gray-800'>OUR Community</h2>
          <li className='my-4 list-none hover:underline decoration-white cursor-pointer'>Community</li>
          <li className='my-4 list-none hover:underline decoration-white cursor-pointer'>Blog</li>
          <li className='my-4 list-none hover:underline decoration-white cursor-pointer'>Forums</li>
          <li className='my-4 list-none hover:underline decoration-white cursor-pointer'>Meet-Up</li>
        </div>

        <div flex flex-col gap-5>
          <h2 className='text-2xl text-gray-800'>MEET ENVATO</h2>
          <li className='my-4 list-none hover:underline decoration-white cursor-pointer'>Career</li>
          <li className='my-4 list-none hover:underline decoration-white cursor-pointer'>Private Policy</li>
          <li className='my-4 list-none hover:underline decoration-white cursor-pointer'>Site map</li>
        </div>



        <div flex flex-col gap-5>
          <h2 className='text-2xl text-gray-800'>FOOTER</h2>
          <p>hgf jkuygtfrd dxfcgvh kyutf tyfug huygtfr ytfrd yugtfrd huygtfrd iuygtrdx gyutfr yutfrd</p>
        </div>


      </div>

      {/*<div className='flex flex-row container mx-auto pt-4 pb-16 md:grid sm:grid-col-4'>
        <div className='grid grid-col'>
          <ul className='flex flex-row gap-10 ml-[90px] item-between '>
          <li className='my-4 list-none hover:underline decoration-white cursor-pointer'>Envato.com</li>
            <li className='my-4 list-none hover:underline decoration-white cursor-pointer'>Envato Elements</li>
            <li className='my-4 list-none hover:underline decoration-white cursor-pointer'>Placeit by Envato</li>
            <li className='my-4 list-none hover:underline decoration-white cursor-pointer'>Envato Tuts+</li>
            <li className='my-4 list-none hover:underline decoration-white cursor-pointer'>All Product</li>
            <li className='my-4 list-none hover:underline decoration-white cursor-pointer'>Sitemap</li>
          </ul>

          <p className='text-gray-100 text-[15px] ml-[90px]'>Price is in US dollars and excludes tax and handling fees</p>

          <p className='text-gray-100 text-[15px] ml-[90px]'>All Right Reserved by {year}@ someone</p>
        </div>

        

        <div className='flex flex-wrap justify-center space-x-4 items-center text-2xl py-4 px-[250px] sm:px-8 md:px-16 lg:px-24 xl:px-32'>
        <a className='text-white hover:text-blue-500 transition-all duration-150 ease-in-out transform hover:scale-150' href=''><FaGithub/></a>

        <a className='text-white hover:text-blue-500 transition-all duration-150 ease-in-out transform hover:scale-150' href=''><FaLinkedinIn/></a>

        <a className='text-white hover:text-blue-500 transition-all duration-150 ease-in-out transform hover:scale-150' href=''><FaTwitter/></a>

        <a className='text-white hover:text-blue-500 transition-all duration-150 ease-in-out transform hover:scale-150' href=''><FaInstagram/></a>
        </div>
  </div>*/}

      </div>

    </footer>
  )
}

export default Footer
