import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from "../stylesheet/reset";
import { SignIn } from "./SignIn";
import { HomePage } from './HomePage'

function App() {
  return (
    <>
      <Reset />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/homepage" element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;