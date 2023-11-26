
import { Route, Routes } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css"
import './assert/LoginSignUp.css'
import About from './component/Header/About.jsx'
import MainContent from './component/Main/MainContent';
import HomeFile from './component/HomeFile'
import MainDetails from './component/Main/MainDetails';
import SigIn from './component/Header/SignIn.jsx';
import SignUp from './component/Header/SignUp.jsx';
import ForgetPassword from './component/Header/ForgetPassword.jsx';

function App() {
  
  return (
    <div className="App"> 
    <Routes>
  
     <Route path="/" element={<SignUp />} />
   <Route path="/signin" element={<SigIn />} />
   <Route path='/ABOUT' element={<About />}></Route>
   <Route path='/REVIEWS' element={<MainContent />}></Route> 
   <Route path='/Home' element={< HomeFile/>}></Route>
   <Route path='/forget' element={<ForgetPassword  />} />
   <Route path='/maindetails/:id' element={<MainDetails />}></Route>
   </Routes> 
  
  
    </div>
  );
}

export default App;
