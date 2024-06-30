import React from 'react';
import Login from './component/login';
import Dashboard from './component/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App(){
  return (
    <div>
        
        <Router>
          <Routes>
              <Route exact path="/" element={<Login /> }>
              </Route>
              <Route exact path="/dashboard/*" element={<Dashboard/>}>
              </Route>
              
              
          </Routes>
        </Router>
      
    </div>
    
  )
}

export default App;
