import { Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import MemberId from './pages/memberId';
import MemberSocial from './pages/memberSocial';
import Company  from './pages/company';


function Signup() {
  return (
    <Routes>
      <Route path='/' element={<Register/>} />
      <Route path='/memberId' element={<MemberId/>} />
      <Route path='/memberSocial' element={<MemberSocial/>} />
      <Route path='/company' element={<Company/>} />
    </Routes>
  )
}

export default Signup;