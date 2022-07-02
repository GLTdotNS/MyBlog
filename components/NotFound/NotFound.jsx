import React from 'react'
import { Link } from 'react-router-dom'
import "./notFound.css"
const NotFound = () => {
  return (
    <div className="notFound">
              <div className="img">
        <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage"/>
        <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly"/>
        </div>
        <div className="text">
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <h3><Link to="/">BACK TO HOME</Link></h3>
        </div>
    </div>
  )
}

export default NotFound
