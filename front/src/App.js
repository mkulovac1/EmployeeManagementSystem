import './App.css';
import ListEmployee from './components/ListEmployee';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <Header />
          
          <div className="container">
            <Routes>
              <Route path="/employees" element={<ListEmployee />} />
            </Routes>
          </div>
          
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
