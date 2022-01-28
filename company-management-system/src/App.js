
import './App.css';
import { Provider } from 'react-redux';
import Store from './companyStore/store'
import { BrowserRouter } from 'react-router-dom';
import Home from './components/company/home';


function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div className="App">
          <Home />
        </div> 
      </BrowserRouter>
    </Provider>
  );
}

export default App;
