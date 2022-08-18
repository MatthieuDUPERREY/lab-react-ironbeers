import './App.css';
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BeersList from "./components/BeersList";
import DisplayOneBeer from "./components/DisplayOneBeer";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersList />} />
        <Route path="beers/:beerId" element={<DisplayOneBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
