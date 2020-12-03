import React from 'react'
import { Link } from 'react-router-dom'


function Main() {
    return (
        <div class="homemain">
       
        <Link to="/PostPage" class="right over" >
            <img class="img1 img" src="1.jpg" alt="this image not found sorry" />
        </Link>
        <div class="left">
            
            <Link to="/PostPage" class="leftImg over">
            <img class="img1 img" src="2.jpg" alt="this image not found sorry" />
            </Link>
            <Link  to="/PostPage" class="leftImg over">
            <img class="img1 img" src="3.jpg" alt="this image not found sorry" />
            </Link>

        </div>

    </div>
    )
}

export default Main
