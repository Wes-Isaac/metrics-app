import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './components/Detail';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/detail" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
