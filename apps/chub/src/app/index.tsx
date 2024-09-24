import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShadCNThemeProvider } from '@/components';
import Landing from './pages/landing';
import Map from './pages/map';
import Search from './pages/search';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Console from './pages/console';
import Error from './pages/error';
import Callback from './pages/callback';
import Help from './pages/help';

export function App() {

  return (
    <ShadCNThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/map" element={<Map />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/signup/*" element={<Signup />}/>
          <Route path="/console/*" element={<Console />}/>
          <Route path="/callback/*" element={<Callback />}/>
          <Route path="/help/*" element={<Help />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </ShadCNThemeProvider>
  )
}
