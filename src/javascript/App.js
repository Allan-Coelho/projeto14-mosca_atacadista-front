import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from "../stylesheet/reset.js";
import UserContext from "../contexts/UserContext.js";
import { SignIn } from "./SignInPage.js";
import { HomePage } from "./HomePage.js";
import { SignUp } from "./SignUpPage.js";
import PrivatePage from "./PrivatePage.js";
import { Product } from "./ProductPage.js";
import { Cart } from "./CartPage.js";
import { Confirm } from './ConfirmPage.js';
import { ProfilePage } from "./ProfilePage.js";
import { AddProductPage } from "./NewProductPage.js";

function App() {
  return (
    <>
      <Reset />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product" element={<Product />} />
          <Route
            path="/cart"
            element={
              <PrivatePage>
                <Cart />
              </PrivatePage>
            }
          />
          <Route path="/product/new" element={<AddProductPage />} />
          <Route
            path="/homepage"
            element={
              <PrivatePage>
                <HomePage />
              </PrivatePage>
            }
          />
          <Route
            path="/user"
            element={
              <PrivatePage>
                <ProfilePage />
              </PrivatePage>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
