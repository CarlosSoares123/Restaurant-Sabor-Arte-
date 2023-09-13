import {  BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

import { Home } from './pages/Home/home.tsx'
import { About } from './pages/About/about.tsx'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
