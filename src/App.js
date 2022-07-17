import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './pages/landing/Landing'
import NewStart from './pages/newStart/NewStart'
import Beginning from './pages/beginning/Beginning'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/start' element={<NewStart />} />
        <Route path='/beginning' element={<Beginning />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
