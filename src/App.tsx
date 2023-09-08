import {  BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

import { Home } from './pages/Home/home.tsx'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
