import { Form, Modal,  message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootslice';

function Experiences() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;

  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const[type,setType]=React.useState("add")

  const onFinish=async(values)=>{
    console.log(values)
    try {
       dispatch(ShowLoading())
       let response
       if(selectedItemForEdit){
        response=await axios.put('https://dynamic-portfolio-28yn.onrender.com/api/portfolioRoute/update-experience', {
          ...values,
          _id: selectedItemForEdit._id, 
        })

       }
       else{
         response=await axios.post('https://dynamic-portfolio-28yn.onrender.com/api/portfolioRoute/add-experience', {...values});
               //  _id: portfolioData.intro._id,
       }  
       

       dispatch(HideLoading())
        if(response.data.success){
         message.success(response.data.message)
         setShowAddEditModal(false)
         setSelectedItemForEdit(null)
         dispatch(HideLoading());
         dispatch(ReloadData(true))
       }else{
         message.error(response.data.message)
       }
    } catch (error) {
     dispatch(HideLoading())
      message.error(error.message)
    } 
  

  }
  const onDelete= async(item)=>{
    try {
      dispatch(ShowLoading())
      const response=await axios.delete('https://dynamic-portfolio-28yn.onrender.com/api/portfolioRoute/delete-experience',{
        data: { _id: item._id }
      });
      console.log(response)
      dispatch(HideLoading())
      if(response.data.success){
        message.success(response.data.message)
        dispatch(HideLoading());
        dispatch(ReloadData(true))
      }else{
        message.error(response.message)
      }
  }catch (error) {
    dispatch(HideLoading())
     message.error(error.message)
   } 
  }

  return (
    <div>
      <div className='flex justify-end'>
        <button className='bg-primary px-5 py-2 text-white' onClick={() => {
          setSelectedItemForEdit(null);
          setShowAddEditModal(true);
        }}>Add Experience</button>
      </div>
      <div className='grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1'>
        {experiences.map((experience) => (
          <div key={experience._id} className='shadow border-2 p-5 border-gray-400 flex flex-col gap-5 '>
            <h1 className='text-secondary text-xl font-bold'>{experience.period}</h1>
            <hr />
            <h1>Company: {experience.company}</h1>
            <h1>Role: {experience.title}</h1>
            <h1>{experience.description}</h1>
            <div className='flex justify-end gap-5 mt-5'>
              <button className='bg-primary text-white px-5 py-2 rounded-md'
              onClick={()=>{
                setSelectedItemForEdit(experience)
                setShowAddEditModal(true);
                setType("edit");
              
              }}>Edit</button>
              <button className='bg-red-500 text-white px-5 py-2 rounded-md' onClick={()=>{onDelete(experience)}}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {
        (type==="add"|| selectedItemForEdit) && 
      <Modal
        visible={showAddEditModal}
        title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
        onCancel={() => {
          setShowAddEditModal(false)
         setSelectedItemForEdit(null)
        }}
        footer={null}
       
      >
        <Form layout='vertical' onFinish={onFinish}
        initialValues={selectedItemForEdit}
        >
          <Form.Item name='period' label='Period'>
            <input placeholder="Period" />
          </Form.Item>
          <Form.Item name='company' label='Company'>
            <input placeholder="Company" />
          </Form.Item>
          <Form.Item name='title' label='Title'>
            <input placeholder="Title" />
          </Form.Item>
          <Form.Item name='description' label='Description'>
            <input placeholder="Description" />
          </Form.Item>
          <div className='flex justify-end gap-5'>
            <button className='border-black text-black px-5 py-2' onClick={() => setShowAddEditModal(false)}>Close</button>
            <button  className='bg-primary text-white px-5 py-2'type="primary">
              {selectedItemForEdit ? "Update" : "Add"}
            </button>
          </div>
        </Form>
      </Modal>}
    </div>
  );
} 

export default Experiences;