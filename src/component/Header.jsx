import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
    <>
        <nav className="navbar navbar-custom navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" id="logo">
          <img
  src="/react-vite-files/343-3436359_leaflet-transparent-logo-removebg-preview.png"
  alt="Leaflet"
  width="80"
  height="50"
/>




        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/challenge">
                Challenges
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/arogya">
                Arogya
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/ecopoint">
                Eco-Points
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          
            
            <li className="nav-item" id="Leaflet">
              <h5> <span style={{ color: "orange" }}>Leaflet</span></h5>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </>
    
  )
}

export default Header
