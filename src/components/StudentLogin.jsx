import axios from 'axios'
//import { response } from 'express'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const StudentLogin = () => {
    const [input,setInput] = new useState(
        {
            "email":"",
            "password":""
        }
    )
    const nav = useNavigate()
    const inputHandler= (event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues = ()=>{
        axios.post("http://localhost:3001/api/student/loginstud",input).then(
            (res)=>{
                if (res.data.status=="success") {
                    sessionStorage.setItem("studid",res.data.studid._id)
                    nav("/addmark")
                } else if(res.data.status=="Invalid Email"){
                    alert("Invalid Email..")
                }
                else
                {
                    alert("Invalid Password")
                }
            }
        )
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">Student Login</h5>
                    </div>
                    <div className="card-body">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email Id</label>
                                <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name="password" id="" className="form-control" value={input.password} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-info" onClick={readValues}>Login</button>&nbsp;&nbsp;
                            <Link to="/admin" >Admin Login</Link>
                            </div>
                        </div>
    
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentLogin