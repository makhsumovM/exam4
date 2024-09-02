import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import S1BG from "../assets/aboutS1Bg.png"
import villaPng from "../assets/forVillas.png"
import { Button } from '@mui/material'

const VillasById = () => {
    const { id } = useParams();
    const api = "http://localhost:3000/villas";
    const [villa, setVilla] = useState({});

    async function villaById() {
        try {
            const { data } = await axios.get(`${api}/${id}`);
            console.log('Fetched Villa:', data);  // Лог для проверки данных
            setVilla(data);
        } catch (error) {
            console.error('Error fetching villa:', error);
        }
    }

    useEffect(() => {
        villaById();
    }, [id]);  // Добавлен id как зависимость, чтобы запрос обновлялся при изменении параметра

    return (
        <div>
            <div className='section1 relative py-[200px] bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${S1BG})` }}>
                <h1 className='text-center text-white text-[32px] md:text-[48px] lg:text-[64px] 2xl:text-[96px]'>Here some our best works</h1>
            </div>
            <div className='flex justify-around py-[100px] gap-4 '>
                <div className='w-[45%]'>
                    <div className='w-[]'>
                        <h1 className='text-[48px] text-[#056088] w-[80%] m-auto'>{villa.name}</h1>
                        <p className='w-[80%] m-auto py-[20px]'>DEScripTion {villa.description}</p>
                        <div className='flex justify-around font-bold text-[#056088]'>
                            <p className='text-[#056088 font-bold] ]'>Budget:$ {villa.budget}</p>
                            <p className='text-[#056088 font-bold]'>Duration: {villa.time}</p>
                        </div>
                        <Link to="/gallery">
                            <div className=' py-[40px] w-[80%] m-auto'>
                                <Button variant='contained' size='large'>BACK</Button>
                            </div>
                        </Link>
                    </div>
                </div>
                <div><img src={villaPng} alt="" /></div>
            </div>
        </div>
    )
}

export default VillasById;
