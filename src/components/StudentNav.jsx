import React from 'react'
import { Link } from 'react-router-dom'

const StudentNav = () => {
  return (
    <div>
        <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Back to login</Link>
  </div>
</nav>
    </div>
  )
}

export default StudentNav