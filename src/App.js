import './App.css';
import HomePage from './components/HomePage';
import CryptoContextProvider from './context/CryptoContextProvider';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <CryptoContextProvider>
      <HomePage />
    </CryptoContextProvider>
  );
}

export default App;
