import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import About from "./Components/About";
import {Route, Routes, BrowserRouter} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils"  home="Home" about="About"/>

    <Routes>
    <Route exact path="/" element={<Main heading="Enter your text below" previewHeading="Preview"/>} />
    <Route exact path="/about" element={<About/>} />

    </Routes>
    </BrowserRouter>
    </>   
  );
}

export default App;

