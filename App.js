import logo from './logo.svg';
import './App.css';
import Signin  from './SignIn';
import Signup from "./SignUp";
import Navigation  from  "./Navigation"; 
import Home from "./Home";
import About from "./About";
import NewsFeed from "./NewsFeed";
import PetServices from './PetServices';
import 'bootstrap/dist/css/bootstrap.css';

import{render} from "react-dom";
import{
  BrowserRouter,
  Routes,
  Route,
}
from "react-router-dom";
import {auth} from './firebase-config';
import { useState, useEffect } from 'react';


function App(){

  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    });
  }, [user]);


  return(
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/Navigation" element={<Navigation />}>
        <Route path="/Navigation/Home" element={<Home />}/>
        <Route path="/Navigation/About" element={<About />}/>
        <Route path="/Navigation/NewsFeed" element={<NewsFeed/>}/>
        <Route path="/Navigation/PetServices" element={<PetServices/>}/>

        
        </Route>

      
      </Routes>
  )
}

export default App;
