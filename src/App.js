import {Routes, Route} from 'react-router-dom'
import AboutUs from './Components/AboutUs';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Classes from './Components/Classes'
import Registrationpage from './Components/Registrationpage'
import Register  from './Components/Register';
import LogIn from './Components/LogIn'
import Wholeteam from './Trainer/Wholeteam'
import Activity from './Components/Activity';
import Activityy from './Components/Activityy.js';


function App() {
  return (
    <div className="App">     
      <Navbar />
      <Registrationpage />
      <Routes >
        <Route path='/' element={<Home /> } />
        <Route path='/AboutUs' element={<AboutUs />} />
        {/* <Route path='/Classes' element={<Classes />} /> */}
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/wholeteam' element={<Wholeteam />} /> 
        <Route path='/activity' element={<Activity />} />
        <Route pathe='/activityy' element={<Activityy />} />
        </Routes>        
    </div>
  );
}

export default App;
