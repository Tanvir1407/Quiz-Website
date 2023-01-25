import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>  
      <Routes>
        <Route path="/" element={<Home></Home> } />
      </Routes>
    </div>
  );
}

export default App;
