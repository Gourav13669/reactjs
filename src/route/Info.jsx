import React  from 'react';
 import App from '../App.jsx';
 import {Home} from '../Home.jsx';
import './info.css'
import {BrowserRouter, Routes, Route  } from 'react-router-dom';
export const Info =()=>{
 
   return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/detail/:id" element={<Home />} />
         <Route path="*" element={<App />} />
       
    </Routes>
    </BrowserRouter>

  );
}
