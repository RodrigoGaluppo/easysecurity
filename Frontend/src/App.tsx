import React from 'react'

import {BrowserRouter, Route, Routes} from "react-router-dom"


import GlobalStyle from "./styles/global"
import Home from './pages/home';
import Images from './pages/images';


const App: React.FC = ()=>(

    <BrowserRouter>
      <GlobalStyle/>  
      <Routes>
        <Route path='/images/:page'  element={<Images></Images>}></Route>
        <Route path='/'  element={<Home></Home>}></Route>
      </Routes>
      
    </BrowserRouter>
      


  
) 

export default App;