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
    <>
        <table className="table">
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
       
    </>
  )
}

export default ShowCompany