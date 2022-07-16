import { BrowserRouter as Router /*, Routes, Route*/ } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import './App.css';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container mx-auto px-3 pb-12">Content</main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
