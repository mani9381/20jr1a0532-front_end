
import './App.css';
import { BrowserRouter as Rouer,Routes,Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dash from './components/Dash';
function App() {
  return (
    <div className="App">
      <Rouer>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='dashboard' element={<Dash/>}/>
        </Routes>
      </Rouer>
    </div>
  );
}

export default App;
