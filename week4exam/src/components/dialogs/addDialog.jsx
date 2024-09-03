import { TextField } from '@mui/material'
import { Modal } from 'antd'
import React from 'react'
import { useForm } from 'react-hook-form'

const AddDialog = ({isModalOpen,closeAddModal,addingVilla}) => {

 const {register,handleSubmit,formState:{errors}}=  useForm({
  defaultValues:{
    name:'',
    description:'',
    budget:'',
    time:''
  }
 })

  return (
 
    <div>      
        <Modal title="Adding Moda" open={isModalOpen} onCancel={closeAddModal} onOk={handleSubmit(addingVilla)}>
        <div className='flex flex-col gap-[10px]'>
          <TextField placeholder='Name' {...register("name",{required:true})}/>
          {errors.name && <span className='text-[red]'>Поле обязательно для заполнения </span>}
          <TextField placeholder='Description' {...register("description",{required:true})}/>
          {errors.description && <span className='text-[red]'>Поле обязательно для заполнения</span>}
          <TextField placeholder='Price' type='number' {...register("budget",{required:"Поле обязательно для заполнения",valueAsNumber:true,min:{value:0, message:"Цена не может быть отрицательной"}})}/>
          {errors.price &&  <span className='text-[red]'>{errors.price.message}</span> }
          <TextField placeholder='Time' {...register("time",{required:true})}/>
          {errors.time && <span className='text-[red]'>Поле обязательно для заполнения</span>}
        </div>
        </Modal>
    </div>
  )
}

export default AddDialog