import { Form, Modal,  message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootslice';

function AdminProjects() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { projects} = portfolioData;

  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const[type,setType]=React.useState("add")
  const {form} =Form.useForm();

  console.log(selectedItemForEdit)

  const onFinish=async(values)=>{
    console.log(values)
    try {
        const tempTecnologies=values?.technologies?.split(",") ||[]
        values.technologies=tempTecnologies
       dispatch(ShowLoading())
       let response
       if(selectedItemForEdit){
        response=await axios.put('/api/portfolioRoute/update-project', {
          ...values,
          _id: selectedItemForEdit._id, 
        })

       }
       else{
         response=await axios.post('/api/portfolioRoute/add-project', {...values});
               //  _id: portfolioData.intro._id,
       }  
       

       dispatch(HideLoading())
        if(response.data.success){
         message.success(response.data.message)
         setShowAddEditModal(false)
         setSelectedItemForEdit(null)
         dispatch(HideLoading());
         dispatch(ReloadData(true))
         form.resetFields();
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
      const response=await axios.delete('/api/portfolioRoute/delete-project',{
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
          
        }}>Add Project</button>
      </div>
      <div className='grid grid-cols-3 gap-5 mt-5 sm:grid-cols-1'>
        {projects.map((project) => (
          <div key={project._id} className='shadow border-2 p-5 border-gray-400 flex flex-col gap-5 '>
            <h1 className='text-secondary text-xl font-bold'> {project.title}</h1>
            <hr />
            {/* <h1>ImageLink: {project.image}</h1> */}
            <img src={project.image} alt='' className='h-60 w-80'/>
            <h1>  {project.description}</h1>
            <h1> ProjectLink: {project.link}</h1>
            <div className='flex justify-end gap-5 mt-5'>
              <button className='bg-primary text-white px-5 py-2 rounded-md'
              onClick={()=>{
                setSelectedItemForEdit(project)
                setShowAddEditModal(true);
                setType("edit");
              
              }}>Edit</button>
              <button className='bg-red-500 text-white px-5 py-2 rounded-md' onClick={()=>{onDelete(project)}}>Delete</button>
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
        <Form form={form}
        layout='vertical' onFinish={onFinish}
        initialValues={{title: selectedItemForEdit ? selectedItemForEdit.title : '',
    image: selectedItemForEdit ? selectedItemForEdit.image : '',
    description: selectedItemForEdit ? selectedItemForEdit.description : '',
    link: selectedItemForEdit ? selectedItemForEdit.link : '',
    technologies: selectedItemForEdit ? selectedItemForEdit.technologies?.join(" , ") : ''}}
        >
        <Form.Item name='title' label='Title'>
            <input placeholder="Title" />
          </Form.Item>
          <Form.Item name='image' label='Image Link'>
            <input placeholder="Image Link" />
          </Form.Item>
          <Form.Item name='description' label='Description'>
            <textarea placeholder="Description" />
          </Form.Item>
          
          <Form.Item name='link' label='Link'>
            <input placeholder="Link" />
          </Form.Item>

          <Form.Item name='technologies' label='Technologies'>
            <input placeholder="Technologies" />
          </Form.Item>


          <div className='flex justify-end gap-5'>
            <button className='border-black text-black px-5 py-2' onClick={() => setShowAddEditModal(false)}>Close</button>
            <button  className='bg-primary text-white px-5 py-2' type="primary">
              {selectedItemForEdit ? "Update" : "Add"}
            </button>
          </div>
        </Form>
      </Modal>}
    </div>
  );
} 

export default AdminProjects;