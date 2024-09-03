import React from 'react'
import news1 from "../assets/News1.png"
import news2 from "../assets/news2.png"
import S1BG from "../assets/aboutS1Bg.png"
import Aos from 'aos'
const News = () => {
  Aos.init({
    duration: 1000,
    once: false,
  });
  return (
    <div>
      <div className='section1  relative py-[200px] bg-no-repeat bg-cover bg-center'style={{backgroundImage:`url(${S1BG})`}}>
        <h1 className='text-center text-white text-[32px] md:text-[48px] lg:text-[64px] 2xl:text-[96px]'>Article and news about property and constructions</h1>
      </div>
      <div>
        <img
          className=" m-auto py-[100px]"
          src={news1}
          alt=""
        />
      </div>

      <div className='bg-[url("./assets/fon.png")] w-full h-[580px] bg-no-repeat bg-cover mt-[-330px]'></div>

      <div className="grid grid-cols-1 relative lg:grid-cols-3 justify-items-center" data-aos="zoom-in">
        <div
          
          className="w-[420px] h-[544px] shadow-lg shadow-indigo-500/40"
        >
          <img className="w-[300px] h-[250px]" src={news2} alt="" />
          <h1 className="text-[#056088] font-[700] text-[24px] pl-[30px] pt-[20px]">
            Tips of the week
          </h1>
          <p className="text-[#434343] font-[400] text-[16px] w-[330px] pl-[30px] pt-[20px]">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry'
          </p>
          <button className="w-[158px] h-[72px] text-[white] font-[500] text-[16px] bg-gradient-to-r from-[#056088] to-[#09A7CA] ml-[30px] mt-[40px]">
            Read more
          </button>
        </div>

        <div
          
          className="w-[420px] h-[544px] shadow-lg shadow-indigo-500/40"
        >
          <img className="w-[300px] h-[250px]" src={news2} alt="" />
          <h1 className="text-[#056088] font-[700] text-[24px] pl-[30px] pt-[20px]">
            Tips of the week
          </h1>
          <p className="text-[#434343] font-[400] text-[16px] w-[330px] pl-[30px] pt-[20px]">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry'
          </p>
          <button className="w-[158px] h-[72px] text-[white] font-[500] text-[16px] bg-gradient-to-r from-[#056088] to-[#09A7CA] ml-[30px] mt-[40px]">
            Read more
          </button>
        </div>

        <div
          
          className="w-[420px] h-[544px] shadow-lg shadow-indigo-500/40"
        >
          <img className="w-[300px] h-[250px]" src={news2} alt="" />
          <h1 className="text-[#056088] font-[700] text-[24px] pl-[30px] pt-[20px]">
            Tips of the week
          </h1>
          <p className="text-[#434343] font-[400] text-[16px] w-[330px] pl-[30px] pt-[20px]">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry'
          </p>
          <button className="w-[158px] h-[72px] text-[white] font-[500] text-[16px] bg-gradient-to-r from-[#056088] to-[#09A7CA] ml-[30px] mt-[40px]">
            Read more
          </button>
        </div>
      </div>
      
      <h1 className="text-[#056088] font-[700] text-[24px] text-center py-[100px] ">
        See more
      </h1>
    </div>
  )
}

export default News