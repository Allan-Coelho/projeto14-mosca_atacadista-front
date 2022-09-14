import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from "../stylesheet/reset";
import { SignIn } from "./SignIn";

function App() {
  return (
    <>
      <Reset />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;