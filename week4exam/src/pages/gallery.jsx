import React, { useEffect, useState } from 'react'
import S1BG from "../assets/aboutS1Bg.png"
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import Villas from '../components/cards/villas';
import AddDialog from '../components/dialogs/addDialog';
const Gallery = () => {

  const api = "http://localhost:3000/villas"
  const [villas, setVillas]=useState([])
  async function get(){
    try {
      const {data} = await axios.get(api)
      setVillas(data)
    } catch (error) {
      console.error(error);
    }
  }
  ///forSearch
  const [search ,setSearch] = useState("")
  
useEffect(()=>{
  get()
},[search])

//forAddindVillas
 const [isModalOpen, setIsModalOpen] =useState(false)
 const openAddModal =()=>{
  setIsModalOpen(true)
}
const closeAddModal =()=>{
  setIsModalOpen(false)
}

const addingVilla =async(formData)=>{
  try {

    await axios.post(api,{...formData,id:Date.now().toString()})
    get()
    closeAddModal()
  } catch (error) {
    console.error(error)
  }
}


///forDeleteVilla

const deleteVilla = async(id)=>{
  try {
    await axios.delete(`${api}/${id}`)
    get()
  } catch (error) {
    console.error(error)
  }
}

  return (
    <div>
      <div className='section1  relative py-[200px] bg-no-repeat bg-cover bg-center'style={{backgroundImage:`url(${S1BG})`}}>
        <h1 className='text-center text-white text-[32px] md:text-[48px] lg:text-[64px] 2xl:text-[96px]'>Here some our best works</h1>
     </div>
     <div className='section1 py-[100px]'>
      <div className='w-[90%] m-auto'>
        <TextField placeholder='Search' variant='outlined' size='small' value={search} onChange={(el)=>setSearch(el.target.value)} sx={{backgroundColor:"white", borderRadius:"20px"}}/>
        <Button variant='contained' onClick={openAddModal}>ADD</Button>
      </div>
     </div>
     <div className='grid justify-center gap-[20px] md:grid-cols-2 lg:grid-cols-3 justify-items-center py-[50px]'>
      {villas.filter((e)=>{
        return e.name.toLowerCase().includes(search.toLowerCase());
      }).map((el)=>{
        return <Villas key={el.id} name={el.name} description={el.description} budget={el.budget} time={el.time} ID={el.id} deleteVilla={deleteVilla}/>
      })}
     </div>
     <AddDialog isModalOpen={isModalOpen} closeAddModal={closeAddModal} addingVilla={addingVilla}/>
    </div>
  )
}

export default Gallery