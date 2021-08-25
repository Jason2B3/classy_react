import UserFinder from "./components/UserFinder";
import React from "react";
import AuthContext from "./store/AuthContext" // import from context file

function App() {
  const {isAuthenticated} = React.useContext(AuthContext) // use as useContext arg
  console.log("login status currently...", isAuthenticated)
  return (
    <div>
      <UserFinder />
    </div>
  );
}

export default App;
