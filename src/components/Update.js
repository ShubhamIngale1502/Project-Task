import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

function Update() {

    const {register, handleSubmit, setValue} = useForm()
    const {persId} = useParams()
    const nav = useNavigate()
    const [person, setPerson] = useState({})
    function fetchData(){
      
        axios.get(`http://127.0.0.1:8000/v1/add/${persId}/`).then(
            (result)=>{
                setValue('first_name',result.data.first_name)
                setValue('last_name',result.data.last_name)
                setValue('gender',result.data.gender)
                setValue('address',result.data.address)
                setValue('city',result.data.city)
                setValue('contact',result.data.contact)
                setValue('pincode',result.data.pincode)
                // console.log(result.data.profile_pic)
                setPerson(result.data)
            }
        ).catch((error)=>{
            console.log(error);
        })
    }
    useEffect(()=>{
        fetchData()
    },[])
    
    function updateData(data){
      console.log(data.profile_pic)
      if(data.profile_pic.length){
        data.profile_pic = data.profile_pic[0]
      }else{
        delete data.profile_pic
      }
      console.log(data)
        axios.patch(`http://127.0.0.1:8000/v1/add/${persId}/`,data,{
          headers:{
            'Content-Type': 'multipart/form-data'
          }
        }).then(
            (result)=>{
                console.log(result);
                alert("Data Updated SuccesFully")
                nav('/show')
            }
        ).catch((error)=>{
            console.log(error);
        })
    }

  return (
    <div>
            <form onSubmit={handleSubmit(updateData)} className="row g-2 fw-bold w-50 mx-auto filter: blur(10px) p-5 bg-dark text-warning">
                <h4>Registration Form</h4>
  <div className="col-md-6">
    <label htmlFor="first_name" className="form-label">first_name</label>
    <input type="text" className="form-control" id="first_name"{...register('first_name')}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="last_name" className="form-label">Last_Name</label>
    <input type="text" className="form-control" id="last_name"{...register('last_name')}/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" {...register('address')}/>
  </div>
  
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"{...register('city')}/>
  </div>
  <div className="col-md-4">
    <label htmlFor="gender" className="form-label">Gender</label>
    <select id="gender" className="form-select"{...register('gender')}>
      <option >Select Option</option>
      <option value='male'>Male</option>
      <option value='female'>Female</option>
      <option value='other'>Other</option>
    </select>
  </div>
  <div className="col-md-6">
    <label htmlFor="contact" className="form-label">Contact</label>
    <input type="text" className="form-control" id="contact"{...register('contact')}/>
  </div>
  <div className="col-md-2">
    <label htmlFor="pincode" className="form-label">Pincode</label>
    <input type="text" className="form-control" id="pincode"{...register('pincode')}/>
  </div>
  <div className="col-md-4">
    <label className='form-label'>Previous Image:</label>
    <img src={`http://localhost:8000${person.profile_pic}`} height={'100px'}/>
    <label htmlFor="profile_pic" className="form-label">Profile Picture</label>
    <input type="file" className="form-control" id="profile_pic"{...register('profile_pic')}/>
  </div>

  <div className="col-12">
    <button type="submit" className="btn btn-warning col-5">Add Details</button>
  </div>
</form>
    </div>

  )
}

export default Update