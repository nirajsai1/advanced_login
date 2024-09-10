import React from "react";
import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom';
import Home from './Home';
import Signin from './Signin';
import Signup from './Signup';
function App()
{
  return(
    <Router>
      <nav>
        <Link to='/'></Link>
        <Link to='/signin'></Link>
        <Link to='/signup'></Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </Router>
  );
}
export default App;