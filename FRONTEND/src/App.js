import {Routes, Route, BrowserRouter} from "react-router-dom"
import Nav from "./components/nav";
import {NotFound, Add, Home} from "./pages";
import Pali from "./pages/pali";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pali" element={<Pali />} />
        <Route exact path="/add" element={<Add />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
