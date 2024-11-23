import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Belep } from './Helpers/LoginContext.jsx';

createRoot(document.getElementById('root')).render(
    <Belep>
        <App />
    </Belep>
);
