import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from "../stylesheet/reset.js";
import { SignIn } from "./SignInPage.js";
import { HomePage } from "./HomePage.js";
import { SignUp } from "./SignUpPage.js";
import UserContext from "../contexts/UserContext.js";
import { useState } from "react";
import PrivatePage from "./PrivatePage.js";
import { Product } from "./Product.js";
import { Cart } from "./Cart.js";

function App() {
  const [user, setUser] = useState({
    name: "",
    profilePictureURL: "",
    token: "",
  });

  return (
    <>
      <Reset />
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />}/>
            <Route path="/product/:productid" element={<Product />} />
            <Route path="/cart"
              element={
                <PrivatePage>
                  <Cart />
                </PrivatePage>
              } />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
