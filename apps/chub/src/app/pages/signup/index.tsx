import { Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import MemberId from './pages/memberId';
import MemberSocal from './pages/memberSocal';
import Company  from './pages/company';


function Signup() {
  return (
    <Routes>
      <Route path='/' element={<Register/>} />
      <Route path='/memberId' element={<MemberId/>} />
      <Route path='/memberSocal' element={<MemberSocal/>} />
      <Route path='/company' element={<Company/>} />
    </Routes>
  )
}

export default Signup;