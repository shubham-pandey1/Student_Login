import React from 'react';
import StudentState from './context/StudentState'
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
        <StudentState>
        <Router>
          <Routes>
              <Route exact path="/" element={<Login /> }>
              </Route>
              <Route exact path="/dashboard/*" element={<Dashboard/>}>
              </Route>
          </Routes>
        </Router>
        </StudentState>
    </div>
    
  )
}

export default App;
