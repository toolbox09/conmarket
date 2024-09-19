import { Routes, Route } from 'react-router-dom';
import IdInquiry from './pages/idInquiry';
import PwInquiry from './pages/pwInquiry';

function Help() {
  return (
    <Routes>
      <Route path='/idInquiry' element={<IdInquiry/>} />
      <Route path='/pwInquiry' element={<PwInquiry/>} />
    </Routes>
  )
}

export default Help;