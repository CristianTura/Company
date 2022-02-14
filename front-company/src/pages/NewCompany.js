import React from 'react'
import { useNavigate } from 'react-router-dom'

const NewCompany = () => {

    const navigate = useNavigate()

    const addCompany = () => {
        navigate('/companies')
    };

  return (
      <div className='d-flex align-items-center' style={{height: '90vh'}}>  
        <form className='w-50 m-auto bg-secondary p-3 rounded text-white'> 
            <div class="mb-3">
                <label for="name" class="form-label">Nombre de la empresa</label>
                <input type="text" class="form-control" id="name" aria-describedby="emailHelp"/>
            </div>

            <div class="mb-3">
                <label for="address" class="form-label">Dirección</label>
                <input type="text" class="form-control" id="address" aria-describedby="emailHelp"/>
            </div>

            <div class="mb-3">
                <label for="nit" class="form-label">NIT</label>
                <input type="text" class="form-control" id="not" aria-describedby="emailHelp"/>
            </div>

            <div class="mb-3">
                <label for="phone" class="form-label">Teléfono</label>
                <input type="text" class="form-control" id="phone" aria-describedby="emailHelp"/>
            </div>
            
            <button type="submit" class="btn btn-primary" onClick={ addCompany } >Submit</button>
        </form>
      </div>
  )
}

export default NewCompany