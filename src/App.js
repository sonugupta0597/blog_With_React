import logo from './logo.svg';
import './App.css';
import Heading from './Components/Heading';
import NavBar from './Components/NavBar';
import Home from './Components/Home/Home';
import { BrowserRouter as Router , Route } from "react-router-dom";
import PostPage from './Components/PostPage/PostPage';
import Latest_Article from './Components/Home/Latest_Article';


function App() {
  const gdata={
    d:  {
          type:"Sports",
          data : [{
              img:"1.jpg",
              title:"abcde",
              description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived "
          }]
      }
  }
  return(
      <div className="container">
        <Router>
         <Heading/>
         <NavBar/>
         <Route path="/" exact>
         <Home/>
         </Route>
         <Route path="/Home">
         <Home/>
         </Route>
         <Route path="/PostPage">
         <PostPage data={gdata}/>
         </Route>
         <Route path="/Sports">
         <Latest_Article type={"Latest"}/>
         </Route>
         <Route path="/Bollybood">
         <Latest_Article type={"Latest"}/>
         </Route>
         <Route path="/Mimes">
         <Latest_Article type={"Latest"}/>
         </Route>
         <Route path="/News">
         <Latest_Article type={"Latest"}/>
         </Route>
         <Route path="/Education">
         <Latest_Article type={"Latest"}/>
         </Route>
         </Router>
      </div>   
  )
}

export default App;