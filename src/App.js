import UserFinder from "./components/UserFinder";
import React, { useContext } from "react";
import { AAA } from "./store/contextFile";
function App() {
  const { theme } = useContext(AAA);
  console.log("Selected theme is:", theme);
  return (
    <div>
      <UserFinder />
    </div>
  );
}

export default App;
