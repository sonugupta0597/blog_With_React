import React , {useState} from 'react'
import PostPage from '../PostPage/PostPage';
import Bottom_Latest from './Bottom_Latest'
import Latest from './Latest'
import Latest_Article from './Latest_Article'
import Main from './Main';


function Home() {

   

    return (
        <div>
          <Main/>
          <Latest/>
          <Latest_Article/>
          <Bottom_Latest/>
          
        </div>
    )
}

export default Home;
