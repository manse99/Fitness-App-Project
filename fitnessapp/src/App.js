import './App.css';
import Nav from './components/Nav.jsx';
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About.jsx';
import CreateExerciseRec from './Pages/CreateExerciseRec.jsx';
import Home from './screens/Home.jsx';

function App() {
  return (
   <Router>
    <Nav />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Pages/About' element={<About/>} />
      <Route path='/Pages/Add-Exercise-Record' element={<CreateExerciseRec/>} />
    </Routes>
   </Router>
  );
}

export default App;
