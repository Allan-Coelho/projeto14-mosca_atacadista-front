import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from "../stylesheet/reset";
import { SignIn } from "./SignIn";
import { HomePage } from './HomePage'
import { Product } from './Product'

function App() {
  return (
    <>
      <Reset />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/homepage" element={<HomePage/>}/>
            <Route path="/product" element={<Product/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;