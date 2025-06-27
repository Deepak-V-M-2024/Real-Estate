import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Company from "./components/companies/Company"
import './App.css'
import Residencies from "./components/residencies/Residencies.jsx";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white"/>
      <Header/>
      <Hero/></div>
      <Company/>
      <Residencies/>
    </div>
  );
}

export default App;
