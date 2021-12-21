import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './components/Detail';
import Home from './components/Home';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/detail/:name" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
