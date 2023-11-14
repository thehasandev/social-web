import React from 'react'

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div>
        <div class="bg-[#575757] md:p-8 p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 text-white items-center">
            <div className=' flex justify-around w-full gap-7 md:ml-20 ml-6'>
                <div>
                    <h3 class="text-3xl font-mono mb-4">Company</h3>
                    <div>
                        <div className=' text-xl'>
                            <ul>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Career</li>
                            <li>Contact</li>

                            </ul>
                        </div>
                        <div className='flex gap-1 mt-3'>
                            <p className=' cursor-pointer'><FaFacebook /></p>
                            <p className=' cursor-pointer'><FaTwitter /></p>
                            <p className=' cursor-pointer'><FaInstagram /></p>
                            <p className=' cursor-pointer'><FaLinkedin /></p>
                            <p className=' cursor-pointer'><FaYoutube /></p>
                        </div>
                    </div>
                </div>
                <div className='md:flex items-center justify-between '>
                    <div className=''>
                        <h3 class="text-3xl  mb-4 font-mono">Services</h3>
                        <ul className=' text-xl'>
                            <li>Digital Marketing</li>
                            <li>Graphics Design</li>
                            <li>Content Writing</li>
                            <li>Web Design & Development</li>
                        </ul>
                    </div>
                    <div className='md:ml-10'>
                        <h3 class="text-xl font-mono ">SEO</h3>
                        <ul className=' text-xl'>
                            <li>Convert File</li>
                            <li>Video Editing</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className=' md:w-8/12 md:ml-52'>
                <div className=' text-black  mx-auto rounded-lg'>
                    <div className=' bg-[#787475]   px-5 py-8 rounded-3xl'>
                        <ul className=' text-xl'>
                            <li>USA Office</li>
                            <li>1111 Olde Bailey Lane, Melbourne,FL 32904</li>
                            <li>+1 (321) 290 9454</li>
                            <li>hello@bizcope.com</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Footer