import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/StudentSignup';
import Home from './Components/Home';
import SideBar from './Components/SideBar';
import Courses from './Components/Courses';
import Students from './Components/Students';
import Subjects from './Components/Subjects';
import Reports from './Components/Reports';
import Navbar from './Components/Navbar';
import Instructors from './Components/Instructors';
import AdminDashboard from './Components/AdminDashboard';
import StudentRegister from './Components/StudentSignup';
import Faq from './Components/FAQ';
import Policy from './Components/policy';
import Term from './Components/Term';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SideBar/>
      <Navbar/>
      <Routes>
      <Route path="/" element ={<Home/>}></Route>
      <Route path="/login" element ={<Login/>}></Route>
      <Route path="/register" element ={<StudentRegister/>}></Route>
      <Route path='/trips' element={<Courses/>}/>
      <Route path='/receipts' element={<Students/>}/>
      <Route path='/expense' element={<Instructors/>}/>
      <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
      <Route path='/subjects' element={<Subjects/>}/>
      <Route path='/reports' element={<Reports/>}/>
      <Route path='/faq' element={<Faq/>}/>
      <Route path='/policy' element={<Policy/>}/>
      <Route path='/terms' element={<Term/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
