import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from "../stylesheet/reset.js";
import { SignIn } from "./SignInPage.js";
import { HomePage } from "./HomePage.js";
import { SignUp } from "./SignUpPage.js";
import PrivatePage from "./PrivatePage.js";
import { ProductPage } from "./ProductPage.js";
import { CartPage } from "./CartPage.js";
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
          <Route path="/product" element={<ProductPage />} />
          <Route
            path="/cart"
            element={
              <PrivatePage>
                <CartPage />
              </PrivatePage>
            }
          />
          <Route path="/product/new" element={<AddProductPage />} />
          <Route
            path="/home"
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
