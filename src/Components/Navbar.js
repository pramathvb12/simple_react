import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home </a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li> */}
      </ul>
      <div className="switch" >
      <label className="switch">
      <input type="checkbox" name="Enable dark mode" onClick={props.tooglemode}/>
      <span className="slider round"></span>
      <label style={{color : props.mode === 'dark'?'white':'black'}}></label>
      </label>
      </div>
      {/* <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
      </form> */}
    </div>
  </nav>
  
  </>
  )
}
Navbar.propTypes ={
    title:PropTypes.string

}
