import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthContext, { AuthProvider } from "./store/AuthContext";
ReactDOM.render(
  //% each child within these AuthProvider tags has access to the distribution object
  <AuthProvider> 
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
