import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function Delete() {
    
    const [person, setPerson] = useState({})
    const nav = useNavigate()
    const {persId} = useParams()

    function fetchData(){
        axios.get(`http://127.0.0.1:8000/v1/add/${persId}/`).then(
            (result)=>{
                setPerson(result.data)
                
            }
        ).catch((error)=>{
            console.log(error);
        })
    }
    useEffect(()=>{
        fetchData()
    },[])

    function DeleteData(){
        axios.delete(`http://127.0.0.1:8000/v1/add/${persId}/`).then(
            (result)=>{
                console.log(result);
                alert("Data Deleted SuccesFully!!!")
                nav('/show')
            }
        )
    }
  return (
    <div>
        <h3>Do you really want to Delete This Data</h3>
        <h2>Person_ID:-{person.id}</h2>
        <h2>Person_Name:-{person.first_name}</h2>
        <button className='btn btn-outline-success' onClick={()=>{DeleteData()}} type='submit'>Yes</button>
        <NavLink to={'/show'} className='btn btn-outline-danger'type='button'>No</NavLink>
    </div>
  )
}

export default Delete