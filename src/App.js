import logo from './logo.svg';
import './App.css';
import LoginScreen from './Pages/Login';
import CountryScreen from './Pages/CreateCountry';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryList from './Pages/CountryList';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />}/>
       
          <Route path="create-country" element={<CountryScreen />} />
      
          <Route path="country-list" element={<CountryList />} />
      
          <Route path="*" element={<LoginScreen />} />
      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

