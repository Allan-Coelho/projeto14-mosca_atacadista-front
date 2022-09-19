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
import AddProductPage from "./NewProductPage.js";

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
            <Route
              path="/cart"
              element={
                <PrivatePage>
                  <Cart />
                </PrivatePage>
              }
            />
            <Route
              path="/product/new"
              element={
                <PrivatePage>
                  <AddProductPage />
                </PrivatePage>
              }
            />
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
      </UserContext.Provider>
    </>
  );
}

export default App;
