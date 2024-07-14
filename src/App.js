import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/style.scss'
import './styles/var.scss'

import {Main} from './pages/Main/Main'
import {OurTeam} from './pages/OurTeam/OurTeam'
import {Contacts} from './pages/Contacts/Contacts'
import {Price} from './pages/Price/Price'
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="ourteam" element={<OurTeam />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="price" element={<Price />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
