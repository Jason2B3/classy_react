import React from "react";
import ErrorBoundary from "./store/ErrorBoundary";
import Hero from "./components/Hero";
function App() {
  return (
    <div>
      <ErrorBoundary>
        <Hero name={"Batman"} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero name={"Superman"} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero name={"Joker"} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
