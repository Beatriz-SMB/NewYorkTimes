import './App.css';
import Routes from './router/routes';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header';

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
 
    </>
  );
}

export default App;