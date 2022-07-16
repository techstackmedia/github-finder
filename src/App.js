import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <main className="container mx-auto px-3 pb-12">Content</main> */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
