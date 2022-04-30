import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Explore from './pages/Explore';
import Other from './pages/Other';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
