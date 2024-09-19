import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineThemeProvider } from '@/components';
import Landing from './pages/landing';
import Map from './pages/map';
import Search from './pages/search';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Console from './pages/console';
import Error from './pages/error';

export function App() {

  return (
    <MantineThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/map" element={<Map />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/signup/*" element={<Signup />}/>
          <Route path="/console" element={<Console />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </MantineThemeProvider>
  )
}
