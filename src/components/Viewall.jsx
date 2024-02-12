import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Viewall = () => {
    const [data,setData]=new useState([])
    const getData = ()=>{
        axios.get("http://localhost:3001/api/college/viewall").then(
            (response)=>{
                setData(response.data)
            }
        )
    }
    useEffect(()=>{getData()},[])
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Roll No</th>
      <th scope="col">Admission No.</th>
      <th scope="col">College Name</th>
      <th scope="col">Parent Name</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map(
            (value,index)=>{
                return <tr>
                <th scope="row">{value.name}</th>
                <td>{value.rollno}</td>
                <td>{value.admno}</td>
                <td>{value.collegename}</td>
                <td>{value.parentname}</td>
                <td>{value.phone}</td>
              </tr>
            }
        )
    }
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Viewall