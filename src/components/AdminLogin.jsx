import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const [input,setInput] = new useState(
        {
            "adname":"",
            "adpass":""
        }
    )
    const nav = useNavigate()
    const inputHandler= (event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues = ()=>{
        if (input.adname=="admin" && input.adpass=="admin") {
            nav("/addstudent")
        } else {
            alert("Invalid login..")
        }
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-1 col-xl-12 col-xxl-12 ">
                            <label htmlFor="" className="form-label">Username</label>
                            <input type="text" className="form-control" name='adname' value={input.adname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-1 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="adpass" className="form-control" value={input.adpass} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-1 col-xl-12 col-xxl-12">
                            <button className="btn btn-info" onClick={readValues}>Login</button>&nbsp;&nbsp;
                            <Link to="/" >Student Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminLogin