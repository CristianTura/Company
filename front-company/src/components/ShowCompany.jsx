import React, { useEffect, useState } from 'react'
import { getDataAll } from '../helpers/fetch'
import Companies from './Companies'


const ShowCompany = () => {

    const [getCompanies, setCompanies] = useState([])

    const getData = async ( ) => {
        const data = await getDataAll()
        setCompanies(data)
    }

    useEffect( () => {
        getData();
    }, [])

  return (
    <div className=''>
        <table className="table w-75 m-auto mt-5">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre de la empresa</th>
                <th scope="col">Dirección</th>
                <th scope="col">NIT</th>
                <th scope="col">Teléfono</th>
                </tr>
            </thead>
            <tbody>
            {
            getCompanies.map( (company, index) => (
                <Companies key={index} {...company}/>
                )
            )}
            </tbody>
            </table>
       
    </div>
  )
}

export default ShowCompany