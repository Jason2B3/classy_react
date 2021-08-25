import UserFinder from "./components/UserFinder";
import React from "react";
import { useCustomContextHook } from "./store/contextFile";

function App() {
  const { theme } = useCustomContextHook();
  console.log("Selected theme is:", theme);
  return (
    <div>
      <UserFinder />
    </div>
  );
}

export default App;
