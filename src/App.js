import { BrowserRouter, Routes, Route } from 'react-router-dom';

//styles
import './styles/style.scss'
import './styles/var.scss'

//pages
import {Main} from './pages/Main/Main'
import {OurTeam} from './pages/OurTeam/OurTeam'
import {Contacts} from './pages/Contacts/Contacts'
import {Price} from './pages/Price/Price'
import {Layout} from "./components/Loyaut/Layout";


function App() {
  return (
      <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout/>}>
                      <Route index element={<Main />} />
                      <Route path="ourteam" element={<OurTeam />} />
                      <Route path="contacts" element={<Contacts />} />
                      <Route path="price" element={<Price />} />
                  </Route>
              </Routes>
      </BrowserRouter>
  );
}

export default App;
