import React from 'react'
import aboutS1Bg from "../assets/aboutS1Bg.png"
import aboutS2png1 from "../assets/aboutS2png1.png"
import aboutS2png2 from "../assets/aboutS2png2.png"
import aboutS3Img from "../assets/aboutS4img.png"
const About = () => {
  return (
    <div>
      <div className='section1  relative py-[200px] bg-no-repeat bg-cover bg-center'style={{backgroundImage:`url(${aboutS1Bg})`}}>
        <h1 className='text-center text-white text-[32px] md:text-[48px] lg:text-[64px] 2xl:text-[96px]'>About our story - We are the best team</h1>
      </div>
      <div className='section2 py-[200px]'>
        <div className='flex flex-col gap-[20px] lg:flex-row lg:items-center 2xl:justify-center '>
          <div className='flex flex-col lg:w-[45%] lg:relative'>
            <img src={aboutS2png1} alt="" />
            <img src={aboutS2png2} alt="" className='lg:absolute lg:bottom-[-10%] lg:left-[24%] 2xl:left-[50%] 2xl:w-[50%]' />
          </div>
          <div className='lg:w-[45%]'>
            <h1 className='font-bold text-[#056088] text-center 2xl:text-[64px]'>Here were the story begins</h1>
            <p className='py-[20px] 2xl:text-[18px] 2xl:w-[80%] 2xl:m-auto'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <p className='py-[20px] 2xl:text-[18px] 2xl:w-[80%] 2xl:m-auto'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
        </div>
      </div>
      <div className='section3 py-[100px]'>
        <div className='bg-gradient-to-r from-[#023957] to-[#056088] flex flex-col gap-[20px] text-white justify-center items-center lg:flex-row py-[50px]'>
          <div className='lg:w-[50%]'>
            <h1 className='2xl:text-[64px]'>We love to make perfect   home</h1>
            <p className='2xl:text-[18px] 2xl:w-[80%] py-[20px]'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
          <div className='lg:w-[30%]'>
            <img src={aboutS3Img} alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default About