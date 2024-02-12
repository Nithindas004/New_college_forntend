import axios from 'axios'
import React, { useState } from 'react'
import StudentNav from './StudentNav'

const AddMark = () => {
    const [input,setInput] = new useState(
        {
            "studentid":sessionStorage.getItem("studid"),
            "maths":"",
            "python":"",
            "C":"",
            "java":"",
            "android":"",
        }
    )
    const inputHandler = (event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues = ()=>{
        axios.post("http://localhost:3001/api/student/addmark",input).then(
            (res)=>{
                if (res.data.status=="success") {
                    setInput(
                        {
                            "maths":"",
                            "python":"",
                            "C":"",
                            "java":"",
                            "android":"",
                        }
                    )
                    alert("Successfully added")
                } else {
                    alert("Something went wrong")
                }
            }
        )
    }
  return (
    <div>
        <StudentNav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl">
                    <h2>Add the Marks</h2>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Maths</label>
                            <input type="text" className="form-control" name='maths' value={input.maths} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Python</label>
                            <input type="text" className="form-control" name='python' value={input.python} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">C</label>
                            <input type="text" className="form-control" name='C' value={input.C} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Java</label>
                            <input type="text" className="form-control" name='java' value={input.java} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Android</label>
                            <input type="text" className="form-control" name='android' value={input.android} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-info" onClick={readValues} >ADD MARK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddMark