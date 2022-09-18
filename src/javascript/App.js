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
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/homepage"
              element={
                <PrivatePage>
                  <HomePage />
                </PrivatePage>
              }
            />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
