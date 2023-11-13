import './App.css';
import HomePage from './components/templates/HomePage';
import CryptoContextProvider from './context/CryptoContextProvider';

function App() {
  return (
    <CryptoContextProvider>
      <HomePage />
    </CryptoContextProvider>
  );
}

export default App;
