import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Register from './Register';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      
         <Login />
         <Register />
        
    </div>
  );
}

export default App;
