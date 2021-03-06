import React from "react"
import {Routes, Route, BrowserRouter} from "react-router-dom"
import {NotFound, Add, Home} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<Add />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
