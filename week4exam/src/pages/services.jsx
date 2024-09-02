import React from 'react'
import S1BG from "../assets/aboutS1Bg.png"
import homeS3Icon1 from "../assets/homeS3Icon1.png";
import homeS3Icon2 from "../assets/homeS3Icon2.png";
import homeS3bgIcon1 from "../assets/homeS3bgIcon1.png";
import sevicesS3Png from "../assets/servicesS3Png.png"
import servicesS3BG from "../assets/servicesS3Bg.png"
import servicesS3Bg2 from "../assets/servicesS3BG2.png"
const Services = () => {
  return (
    <div>
      <div className='section1  relative py-[200px] bg-no-repeat bg-cover bg-center'style={{backgroundImage:`url(${S1BG})`}}>
        <h1 className='text-center text-white text-[32px] md:text-[48px] lg:text-[64px] 2xl:text-[96px]'>Our team services</h1>
      </div>
      <div className='section2 py-[100px]'>
      <div className='grid grid-cols-1 items-center justify-items-center sm:grid-cols-2 lg:grid-cols-4'>
          <div className='w-[310px] h-[240px] text-[white] flex flex-col justify-around items-start p-4' style={{ backgroundImage: `url(${homeS3bgIcon1})` }}>
            <div><img src={homeS3Icon1} alt="" /></div>
            <h1 className='text-[24px]'>Design building/house</h1>
            <p className='text-[18px]'>We have an architect for design new buildings</p>
          </div>
          <div className='w-[310px] h-[240px] dark:text-[white] text-[#434343] flex flex-col justify-around items-start p-4'>
            <div><img src={homeS3Icon2} alt="" /></div>
            <h1 className='text-[24px]'>Design building/house</h1>
            <p className='text-[18px]'>We have an architect for design new buildings</p>
          </div>
          <div className='w-[310px] h-[240px] dark:text-[white] text-[#434343] flex flex-col justify-around items-start p-4'>
            <div><img src={homeS3Icon2} alt="" /></div>
            <h1 className='text-[24px]'>Design building/house</h1>
            <p className='text-[18px]'>We have an architect for design new buildings</p>
          </div>
          <div className='w-[310px] h-[240px] dark:text-[white] text-[#434343] flex flex-col justify-around items-start p-4'>
            <div><img src={homeS3Icon2} alt="" /></div>
            <h1 className='text-[24px]'>Design building/house</h1>
            <p className='text-[18px]'>We have an architect for design new buildings</p>
          </div>
        </div>
      </div>
      <div className='section3 py-[100px]'>
        <div className='flex justify-center flex-col md:flex-row py-[50px]'>
          <div className='w-[]'><img src={sevicesS3Png} alt="" /></div>
          <div style={{backgroundImage:`url(${servicesS3BG})`}} className='w-[100%] p-4 xl:w-[50%]'>
            <h1 className='text-white text-center py-2 xl:text-[64px]'>Design building / house</h1>
            <p className='text-[white] py-2 xl:text-[24px] text-center'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
        </div>
        <div className='flex justify-center flex-col md:flex-row py-[50px]'>
          <div style={{backgroundImage:`url(${servicesS3BG})`}} className='w-[100%] p-4 xl:w-[50%]'>
            <h1 className='text-white text-center py-2 xl:text-[64px]'>Design building / house</h1>
            <p className='text-[white] py-2 xl:text-[24px] text-center'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
          <div className='w-[]'><img src={servicesS3Bg2} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default Services