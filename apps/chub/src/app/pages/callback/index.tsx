import { Routes, Route } from 'react-router-dom';
import { NaverCallback } from './NaverCallback';

function Callback() {
    return (
    <Routes>
        <Route path={'/naver'} element={<NaverCallback/>} />
    </Routes>
    )
}

export default Callback;