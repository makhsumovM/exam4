import React from 'react';
import homes1pic from "../assets/homeS1Pic.png";
import { Button, TextField } from '@mui/material';
import homeS2Pic from "../assets/homeS2Pic.png";
import Aos from 'aos';
import 'aos/dist/aos.css';
import homeS3Icon1 from "../assets/homeS3Icon1.png";
import homeS3Icon2 from "../assets/homeS3Icon2.png";
import homeS3bgIcon1 from "../assets/homeS3bgIcon1.png";
import HomeSwiper1 from '../components/swipers/homeswipers/homeSwiper1';
import homeS4Img1 from "../assets/homeS4img1.png";
import homeS4Img2 from "../assets/homeS4img2.png";
import homeS4Img3 from "../assets/homeS4img3.png";
import homeS4Img4 from "../assets/homeS4img4.png";
import homeS4Img5 from "../assets/homeS4img5.png";
import homeS4Img6 from "../assets/homeS4img6.png";
import homeS4Img7 from "../assets/homeS4img7.png";
import homeS4Img8 from "../assets/homeS4img8.png";
import homeS4Img9 from "../assets/homeS4Img9.png";
import homeS4Bg from "../assets/homeS4Bg.png"
import s5Bottom from "../assets/s5BotomImg.png"
import homeS6img from "../assets/homeS6Bg.png"
import play from "../assets/play.png"
import emailBg from "../assets/emaiBG.png"

const Home = () => {
  const images = [
    homeS4Img1,
    homeS4Img2,
    homeS4Img3,
    homeS4Img4,
    homeS4Img5,
    homeS4Img6,
    homeS4Img7,
    homeS4Img8,
    homeS4Img9,
  ];
  
  Aos.init({
    duration: 1000,
    once: false,
  });

  return (
    <div className=''>
      <div className='section1 flex bg-gradient-to-r from-[#023957] to-[#056088] items-center h-[100vhs] flex-col-reverse lg:flex-row relative'>
        <div className='lg:relative 2xl:w-[50%] lg:left-[10%] lg:top-[50px] 2xl:left-[15%]' style={{zIndex:"2"}}>
          <h1 className='dark:text-white text-[24px] font-bold sm:text-center lg:text-start lg:text-[32px] 2xl:text-[52px] 2xl:w-[100%] 2xl:m-auto'>
            We build your dream house well and professionally
          </h1>
          <p className='dark:text-white text-[18px] sm:text-center lg:text-start 2xl:m-auto 2xl:text-[24] 2xl:w-[100%]'>
            Our team can build a house according to your wishes. Any design and concept, we will help make it happen.
          </p>
          <div className='text-center py-[20px] lg:text-start 2xl:w-[100%] 2xl:m-auto'>
            <Button variant='contained' size='large' sx={{ padding: "20px", background: 'linear-gradient(to right, #056088, #09A7CA)', "^:hover": { background: "linear-gradient(to right, #056088, #09A7CA)" } }}>
              Contact us
            </Button>
          </div>
        </div>
        <div className='2xl:w-[50%] 2xl:relative xl:top-2' style={{zIndex:"0"}}>
          <img src={homes1pic} alt="" className='2xl:w-[100%] 2xl:h-[100%]'/>
        </div>
      </div>
      <div className='section2 m:py-[100px] xl:py-[300px]'>
        <div className='flex flex-col items-center md:flex-row md:justify-around md:items-center'>
          <div className='md:w-[45%]' data-aos="fade-right">
            <img src={homeS2Pic} alt="" className='md:w-[100%]'/>
          </div>
          <div className='text-center dark:text-white md:w-[45%] md:text-start xl:flex xl:flex-col xl:items-start xl:gap-[50px]' data-aos="fade-left">
            <h1 className='font-bold lg:text-[32px] xl:text-[64px]'>Our company</h1>
            <p className='py-[20px] md:py-0 lg:text-[20px] lg:py-2 xl:text-[32px] xl:w-[70%]'>
              Debuilds is a team of architects, interior design, and contractors who help our clients not only to build their dream building, but also to feel comfortable after the building is used.
            </p>
            <p className='xl:text-[32px]'>We already handled</p>
            <ul className='flex justify-between py-[20px] md:py-0 lg:py-2 xl:gap-[20px] xl:text-[48px] text-[#056088] font-bold'>
              <li>50+ Clients</li>
              <li>30+ House</li>
              <li>20+ Building</li>
            </ul>
            <Button variant='contained' size='large' sx={{ padding: "20px", background: 'linear-gradient(to right, #056088, #09A7CA)', "^:hover": { background: "linear-gradient(to right, #056088, #09A7CA)" } }}>
              See more
            </Button>
          </div>
        </div>
      </div>
      <div className='section3 py-[100px]'>
        <h1 className='text-center text-[32px] lg:text-[52px] font-bold text-[#056088]'>Our services</h1>
        <p className='text-center text-[18px] py-5 lg:text-[32px] lg:w-[20%] lg:m-auto'>
          Our services include building new buildings and renovating old buildings
        </p>
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
      <div className='section4'>
        <h1 className='text-center text-[32px] lg:text-[52px] font-bold text-[#056088]'>Our benefits</h1>
        <p className='dark:text-white text-center text-[18px] py-5 lg:text-[32px] lg:w-[20%] lg:m-auto'>
          Our services include building new buildings and renovating old buildings
        </p>
        <div className='py-[100px]'>
          <HomeSwiper1 />
        </div>
      </div>
      <div className='section5' style={{backgroundImage:`url(${homeS4Bg})`}}>
        <h1 className='text-center text-[32px] lg:text-[52px] font-bold text-white'>Gallery</h1>
        <p className='text-center text-[18px] py-5 lg:text-[32px] lg:w-[60%] lg:m-auto text-white'>
          Here is a collection of images showcasing our work. Each image is presented in its own space.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-16'>
          {images.map((img, index) => (
            <div key={index} className='w-full h-[250px] overflow-hidden'>
              <img src={img} alt={`Gallery ${index + 1}`} className='object-cover w-full h-full' />
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center py-[20px]'>
          <Button variant='contained' size='large' sx={{ padding: "40px", fontSize:"24px", background: 'linear-gradient(to right, #056088, #09A7CA)', "^:hover": { background: "linear-gradient(to right, #056088, #09A7CA)" } }}>
            See more
          </Button>
        </div>
        <div className='lg:flex lg:justify-center items-center py-[100px]'>
          <div className='bg-white  p-8'>
            <h1 className='text-[32px]'>What our clients say?</h1>
            <p className='text-[24px] py-8'>See what our clients say about their new home</p>
            <div className=' py-[20px]'>
              <Button variant='contained' size='large' sx={{ padding: "20px", fontSize:"24px", background: 'linear-gradient(to right, #056088, #09A7CA)', "^:hover": { background: "linear-gradient(to right, #056088, #09A7CA)" } }}>
                See more
              </Button>
               </div>
          </div>
          <div className='w-[70%]'><img src={s5Bottom} alt="" className='w-[100%]' /></div>
        </div>
      </div>
      <div className='section6'>
        <div className='flex text-[48px] justify-around flex-wrap py-[50px]'>
          <h1>Our Partners</h1>
          <h1>J.consttruct</h1>
          <h1>Arch</h1>
          <h1>Whix.co</h1>
          <h1>DZIKRA</h1>
        </div>

      </div>
      <div className='py-[100px] relative'>
          <img src={homeS6img} alt=""  className='lg:w-[50%] m:w-[100%] m-auto'/>
          <img src={play} alt="" className='absolute top-[50%] left-[50%]' style={{transform:"translate(x-50%,y-50%)"}} />
      </div>
      <div className='py-[100px]'>
        <div className='Email p-10' style={{backgroundImage:`url(${emailBg})`} }>
            <h1 className='text-center py-4 lg:text-[48px] text-white '>Want to get our offer updates and news?</h1>
            <p className='text-center py-4 text-white lg:text-[24px]'>Submit your e-mail and we will give you update about information and discount. Every single week. (not spamming)</p>
            <div className='flex items-center justify-center py-[20px]'>
                <TextField placeholder='Enter your e-mail here' sx={{width:"30%", backgroundColor:"white"}} variant='outlined'/>
                <Button variant='contained' size='large' sx={{  fontSize:"24px", background: 'linear-gradient(to right, #056088, #09A7CA)', "^:hover": { background: "linear-gradient(to right, #056088, #09A7CA)" } }}>
                    Sign up
                </Button>
            </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
