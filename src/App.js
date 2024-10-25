import React from 'react'
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import Email from './Email'
// import LoginAlert from './LoginAlert'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/Dashboard' element={<Dashboard />}></Route>
          {/* <Route path='/LoginAlert' element = {<LoginAlert/>}></Route> */}
          <Route path='/email' element={<Email />}></Route>
          {/* <Route path='/login' element={<Login />}></Route> */}

        </Routes>
      </Router>
    </div>
  )
}

export default App