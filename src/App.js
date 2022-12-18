import {
  Routes,
  Route
} from "react-router-dom";

// Pages
import Login from './Pages/Login';
import Home from './Pages/Home';
import AnimeDetails from "./Components/AnimeDetails";


function App() {




  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path= "/Anime:id" element={<AnimeDetails />} />
    </Routes>
  );
}

export default App;
