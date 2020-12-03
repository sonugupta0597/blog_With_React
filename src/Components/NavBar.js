import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
    return (
        <div class="blog-header" >
        <div>
            <Link to="/Home" className="link" style={{textDecoration:"none"}} >
            Home
            </Link>
        </div>

        <div>
        <Link to="/Sports" className="link" style={{textDecoration:"none"}}>
            Sports
            </Link>
        </div>

        <div>
        <Link to="/Bollybood" className="link" style={{textDecoration:"none"}}>
            Bollybood
            </Link>
        </div>

        <div>
        <Link to="/Education" className="link" style={{textDecoration:"none"}}>
            Education
            </Link>
        </div>

        <div>
        <Link to="/Mimes" className="link" style={{textDecoration:"none"}}>
            Mimes
            </Link>
        </div>

        <div>
        <Link to="/News" className="link" style={{textDecoration:"none"}}>
            News
            </Link>
        </div>
    </div>
    )
}

export default NavBar;
