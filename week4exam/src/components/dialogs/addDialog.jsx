import { TextField } from '@mui/material'
import { Modal } from 'antd'
import React from 'react'
import { useForm } from 'react-hook-form'

const AddDialog = () => {

 const {register,}=  useForm({})

  return (
 
    <div>      
    <Modal title="Adding Moda" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
    <TextField placeholder='Name'/>
    <TextField placeholder='Description'/>
    <TextField placeholder='Price'/>
    <TextField placeholder='Quantity'/>
  </Modal></div>
  )
}

export default AddDialog