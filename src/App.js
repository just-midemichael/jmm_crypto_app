import './App.css';
import FooterComp from './componentsJSX/FooterComp';
import HeaderComp from './componentsJSX/HeaderComp';
import MarketDataComp from './componentsJSX/MarketDataComp';

function App() {
  return (
    <div className="App">
      <HeaderComp />
      <MarketDataComp />
      <FooterComp />
    </div>
  );
}

export default App;
