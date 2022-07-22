import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './pages/landing/Landing'
import NewStart from './pages/newStart/NewStart'
import Beginning from './pages/beginning/Beginning'
import Combat from './pages/combat/Combat'
import Guild from './pages/guild/Guild'
import Shop from './pages/shop/Shop'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/start' element={<NewStart />} />
        <Route path='/beginning' element={<Beginning />} />
        <Route path='/combat' element={<Combat />} />
        <Route path='/guild' element={<Guild />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
