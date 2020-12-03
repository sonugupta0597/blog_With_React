import React from 'react'
import Latest from '../Home/Latest'


  
function PostPage(props) {
    
    return (
       <div className="container" style={{padding:"10px"}}>
           
           <img src={props.data.d.data[0].img} className="post-img ha" />

               <h3 style={{marginTop:"20px"}}> 
                     Title :{props.data.d.data[0].title}
               </h3>
           <hr/>
           <h4 style={{marginTop:"10px"}} >
                   Description 
          </h4>

          <p>
                 {props.data.d.data[0].description}
          </p>
          
           <Latest/>
           </div>
    )
}

export default PostPage;
