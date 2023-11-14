import React, { useEffect, useRef } from 'react'
import Container from '../components/Container'
import Flex from "../components/Flex"
import Image from '../components/Image'

import Phone from "../assets/phone.png"
import ImgOne from "../assets/as.png"
import ImgTwo from "../assets/line.png"
import ImgThree from "../assets/b.jpg"
import ImgFour from "../assets/a.jpg"

import Button from '../components/Button'
import Video from "../assets/video.mp4"


function Home() {
 

  return (
    <>
    <section>
      <Container>
       
      </Container>
    </section>

    <section className='py-32 relative '>
      <Container>
        <Flex className="justify-between">
          <div className='w-4/12 pt-16'>
            <h1 className='font-inter font-medium text-secondary text-[64px] w-[550px] leading-[70px]'>Your Ecommerce Growth Agency</h1>
            <h1 className='font-inter font-normal my-4 text-secondary text-lg w-[550px]'>We help e-commerce brands scale by bringing data driven decisions and creativity together for a full-funnel marketing approach.</h1>
            <Button text="Get in touch" hover className="mr-4"/>
            <Button text="View Work"/>
          </div>

          <Image src={ImgTwo} className="absolute bottom-[80px] left-0 -z-10"/>
          <div className='w-7/12 flex justify-center relative'>
            <div>
              <Image src={ImgOne} className="absolute bottom-32 left-0"/>
              <Image src={ImgThree} className="absolute bottom-[274px] -z-40 right-12"/>
              <Image src={ImgFour} className="absolute bottom-[50px] -z-40 right-32"/>
            </div>
            <div className='w-[292px] h-[600px] rounded-[40px] z-40  relative '>
              <img src={Phone} alt="" className='w-full h-full '/>
              <video className='absolute top-1/2 -translate-y-1/2 left-1/2  -translate-x-1/2 w-[90%] h-[95%] -z-10 rounded-[40px] '
                      src={Video}
                      muted
                      autoPlay
                      loop
                    
                      alt="All the devices"
                      
                    > 
              </video>
                </div>
       
          </div>
        </Flex>
      </Container>
    </section>

    </>
  )
}

export default Home