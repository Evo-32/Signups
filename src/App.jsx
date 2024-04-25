import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signin from './component/Signin'
import Signup from "./component/Signup"
import Forgotpassword from './component/Forgotpassword'
import Reset from "./component/Reset"
import Confirmation from "./component/Confirmation"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Signin />}/>
        <Route path='/Signup' element={<Signup />}/>
        <Route path='/Forgotpassword' element={<Forgotpassword/>}/>
        <Route path='/reset' element={<Reset/>}/>
        <Route path='/confirm' element={<Confirmation />}/>
      </Routes>
    </Router>
  )
}

export default App