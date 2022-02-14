import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate();

    const handdleRoute = (route) => {
        navigate(route);
    }

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
        <Link class="navbar-brand pointer" to='/companies'>Company</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link class="nav-link active pointer" aria-current="page" to='/companies'>Inicio</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link pointer" to='/'>Nueva compañia</Link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Header