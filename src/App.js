import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
