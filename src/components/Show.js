import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

function Show() {

    const [person, setPerson] = useState([])

    function fetchData(){
        axios.get('http://127.0.0.1:8000/v1/add/').then(
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


  return (
    <div>
            <table className='table table-success table-striped'>
                    <thead className='table table-dark table-striped'>
                            <tr>
                                <th>First_Name</th>
                                <th>Last_Name</th>
                                <th>gender</th>
                                <th>Contact</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>Pincode</th>
                                <th>Profile Picture</th>
                                <th>Action</th>
                            </tr>
                    </thead>
                    <tbody>
                        {
                            person.map((pr)=>{
                                return(
                                    <tr>
                                        <td>{pr.first_name}</td>
                                        <td>{pr.last_name}</td>
                                        <td>{pr.gender}</td>
                                        <td>{pr.contact}</td>
                                        <td>{pr.address}</td>
                                        <td>{pr.city}</td>
                                        <td>{pr.pincode}</td>
                                        <td><img src={`http://localhost:8000${pr.profile_pic}`}height='100px'/></td>
                                        <td>
                                            <NavLink to={`/person/update/${pr.id}`} className='btn btn-outline-warning col-6'>Update</NavLink>
                                            <NavLink to={`/person/delete/${pr.id}`} className='btn btn-outline-danger col-6 float-end'>Delete</NavLink>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
            </table>
    </div>
  )
}

export default Show