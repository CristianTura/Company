import React from 'react'

const Companies = ({id, name, address, nit, phone}) => {

  return (
    <tr>
        <td scope="row">{id}</td>
        <td>{name}</td>
        <td>{address}</td>
        <td>{nit}</td>
        <td>{phone}</td>
    </tr>
  )
}

export default Companies