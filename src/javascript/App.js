import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from "../stylesheet/reset.js";
import { SignIn } from "./SignInPage.js";
import { HomePage } from "./HomePage.js";
import { SignUp } from "./SignUpPage.js";
import UserContext from "../contexts/UserContext.js";
import PrivatePage from "./PrivatePage.js";
import { Product } from "./Product.js";
import { Cart } from "./Cart.js";
import { ProfilePage } from "./ProfilePage.js";

function App() {
  return (
    <>
      <Reset />
      <UserContext.Provider value={""}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/product" element={<Product />} />
            <Route path="/user" element={<ProfilePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/homepage"
              element={
                <PrivatePage>
                  <HomePage />
                </PrivatePage>
              }
            />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
