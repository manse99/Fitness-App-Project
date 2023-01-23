import './App.css';
import Nav from './components/Nav.jsx';
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Login from './Pages/Login';

function App() {
  return (
   <Router>
    <Nav />
    <Routes>
      <Route path='/Pages/About' element={<About/>} />
      <Route path='/Pages/Login' element={<Login/>} />
    </Routes>
   </Router>
  );
}

export default App;
