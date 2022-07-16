import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './pages/landing/Landing';
import NewStart from './pages/newStart/NewStart'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/start' element={<NewStart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
