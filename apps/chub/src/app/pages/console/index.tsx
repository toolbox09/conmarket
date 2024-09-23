import { Flex } from '@repo/ui';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Manage from './pages/manage';
import { AdminThemeProvider } from '@/components';


function Console() {
  return (
    <AdminThemeProvider>
      <Flex w={'100vw'} h={'100vh'} >
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/manage/*' element={<Manage/>} />
        </Routes>
      </Flex>
    </AdminThemeProvider>
  )
}

export default Console;