import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

import { BrowserRouter } from 'react-router-dom';

const element = document.querySelector('#root');

const root = createRoot(element);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

