import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './Pages/Home';
import {Concepts} from './Pages/Concepts';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/concepts' element={<Concepts/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
