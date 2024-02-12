import axios from 'axios'
import React, { useState } from 'react'
import AddminNav from './AddminNav'

const AddStudent = () => {
    const [input,setInput]= new useState(
        {
            "name":"",
            "rollno":"",
            "admno":"",
            "collegename":"",
            "parentname":"",
            "phone":"",
            "email":"",
            "password":""
        }
    )
    const inputHandler= (event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues = ()=>{
        axios.post("http://localhost:3001/api/college/addstudent",input).then(
            (response)=>{
                if (response.data.status=="success") {
                    alert("Student added Successfully..")
                    setInput(
                        {
                            "name":"",
                            "rollno":"",
                            "admno":"",
                            "collegename":"",
                            "parentname":"",
                            "phone":"",
                            "email":"",
                            "password":""
                        }
                    )
                } else {
                    alert("Something went wrong")
                }
            }
        )
    }
  return (
    <div>
        <AddminNav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name of Student</label>
                            <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Roll No.</label>
                            <input type="text" className="form-control" name='rollno' value={input.rollno} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Admission No.</label>
                            <input type="text" className="form-control" name='admno' value={input.admno} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">College Name</label>
                            <input type="text" className="form-control" name='collegename' value={input.collegename} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Parent Name</label>
                            <input type="text" className="form-control" name='parentname' value={input.parentname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone</label>
                            <input type="text" className="form-control" name='phone' value={input.phone} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email Id</label>
                            <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-info" onClick={readValues}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudent