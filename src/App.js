import { BrowserRouter, Route, Routes} from 'react-router-dom'
import {Footer, Header } from "./components/index"
import { Home, Contact } from "./pages/index"

import React from 'react';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/contact' element={ <Contact /> } />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
