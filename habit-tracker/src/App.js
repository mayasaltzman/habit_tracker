import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from "react-router-dom"
import Overview from './components/pages/Overview';
import Statistics from './components/pages/Statistics';
import Habits from './components/pages/Habits';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* adding pages in these route tags, curly braces are the components which are the js files */}
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
      <Home />
    </div>
  );
}

export default App;
