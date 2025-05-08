//#region imports
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Portfolio from './Components/Portfolio.jsx';

import './common-styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio/>
  </StrictMode>
);
