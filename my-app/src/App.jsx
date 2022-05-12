import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Explore from './pages/Explore';
import Detail from './pages/Detail';
import Other from './pages/Other';
import Todo from './pages/Todo';
import TasksProvider from './providers/task/context';

function App() {
  return (
    <TasksProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/other" element={<Other />} />
          <Route path="/task" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </TasksProvider>
  )
}

export default App
