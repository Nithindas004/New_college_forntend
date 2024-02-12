import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewMark = () => {
    const [data,setData] = new useState([])
    const getData = ()=>{
        axios.get("http://localhost:3001/api/college/viewmark").then(
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
      <th scope="col">Roll no.</th>
      <th scope="col">Admission No.</th>
      <th scope="col">Maths</th>
      <th scope="col">Python</th>
      <th scope="col">C</th>
      <th scope="col">Java</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map(
            (value,index)=>{
                return <tr>
                <th scope="row">{value.studentid.name}</th>
                <td>{value.studentid.rollno}</td>
                <td>{value.studentid.admno}</td>
                <td>{value.maths}</td>
                <td>{value.python}</td>
                <td>{value.C}</td>
                <td>{value.java}</td>
                <td>{value.android}</td>
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

export default ViewMark