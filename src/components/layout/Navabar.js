import React from 'react'
import { NavLink } from 'react-router-dom'

function Navabar() {
  return (
    <div>
            <nav className="navbar navbar-expand-lg  mb-5 bg-info text-dark fw-bold  ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">Persons.com</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active" aria-current="page" to="/register">Register_Details</NavLink>
        <NavLink className="nav-link active" aria-current="page" to="/show">Show_Details</NavLink>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navabar