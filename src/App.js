import Routes from './router/routes';
import { GlobalStyled } from './components/UI/GlobalStyled';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header';


function App() {
  return (
    <>
      
      <BrowserRouter>
        <GlobalStyled />
        <Header />
        <Routes />
      </BrowserRouter>
 
    </>
  );
}

export default App;
