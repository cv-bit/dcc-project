import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './pages/landing/Landing'
import NewStart from './pages/newStart/NewStart'
import Beginning from './pages/beginning/Beginning'
import Arena from './pages/arena/Arena'
import Guild from './pages/guild/Guild'
import Shop from './pages/shop/Shop'
import Tavern from './pages/tavern/Tavern'
import Docks from './pages/docks/Docks'
import Combat from './pages/combat/Combat'
import Forest from './pages/forest/Forest'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/start' element={<NewStart />} />
        <Route path='/beginning' element={<Beginning />} />
        <Route path='/arena' element={<Arena />} />
        <Route path='/guild' element={<Guild />} />
        <Route path='/market' element={<Shop />} />
        <Route path='/tavern' element={<Tavern />} />
        <Route path='/docks' element={<Docks />} />
        <Route path='/combat' element={<Combat />} />
        <Route path='/forest' element={<Forest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
