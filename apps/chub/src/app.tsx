import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineThemeProvider } from '@/components';
import Landing from './pages/landing';
import Map from './pages/map';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Error from './pages/error';

export function App() {

  return (
    <MantineThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/map" element={<Map />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </MantineThemeProvider>
  )
}
