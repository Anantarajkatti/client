import React from 'react'
import {  Form, message } from 'antd';
import {useDispatch, useSelector} from 'react-redux'
import {ShowLoading , HideLoading} from "../../redux/rootslice"
import axios from "axios"


function AdminContact() {
  
  const dispatch=useDispatch();
  const {portfolioData}= useSelector((state)=> state.root)

  const  onFinish = async(values)=>{
    console.log(values)
     try {
        dispatch(ShowLoading())
        const  response= await axios.put('https://dynamic-portfolio-28yn.onrender.com/api/portfolioRoute/update-contact', {
          ...values,
          _id: portfolioData.contact._id,
        }
        
      );
        dispatch(HideLoading())
         if(response.data.success){
          message.success(response.data.message)
        }else{
          message.error(response.data.message)
        }
     } catch (error) {
      dispatch(HideLoading())
       message.error(error.message)
     } 
   
  }
  //console.log(portfolioData)
  return (
    <div>
      <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData.contact}>
        <Form.Item name="name" label="Name">
            <input placeholder='Name'/>
        </Form.Item>
        <Form.Item name="email" label="Email">
            <input placeholder='Email' />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
            <input placeholder='Gender'/>
        </Form.Item>
        <Form.Item name="age" label="Age">
            <input placeholder='Age'/>
        </Form.Item>
        <Form.Item name="mobile" label="Mobile">
            <input placeholder='Mobile'/>
        </Form.Item>
        <Form.Item name="country" label="country">
            <input placeholder='country'/>
        </Form.Item>
        <div className='flex justify-end w-full'>
          <button className='px-10 py-2 bg-primary text-white' type="submit">SAVE</button>
        </div>
      </Form>

    </div>
  )
}

export default AdminContact