import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Quiz from './Components/Quiz/Quiz';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>  
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/quiz/:id" element={ <Quiz></Quiz>} />
      </Routes>
    </div>
  );
}

export default App;
