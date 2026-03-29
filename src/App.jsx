import React from "react";
import { Dock, Navbar, Welcome } from "#components";

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Welcome />
      <Dock />
    </main>
  );
};

export default App;
