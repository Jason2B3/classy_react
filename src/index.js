import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BBB from "./store/contextFile"

ReactDOM.render(
  <BBB>
    <App />
  </BBB>
, document.getElementById('root')
);
