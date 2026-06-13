import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';

//import Stateprops from './Stateprops.jsx';
//import Button from './Button.jsx'
import Product from './TailExample.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
         <Product />
  </StrictMode>,
)
