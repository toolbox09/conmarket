import { Flex } from '@repo/ui';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './parts/Navbar';
import Landing from './pages/dashboard';
import Company from './pages/company';
import Project from './pages/project';


function Manage() {
  return (
      <Flex w={'100vw'} h={'100vh'} >
        <Navbar/>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/company' element={<Company/>} />
          <Route path='/project' element={<Project/>} />
        </Routes>
      </Flex>
  )
}

export default Manage;