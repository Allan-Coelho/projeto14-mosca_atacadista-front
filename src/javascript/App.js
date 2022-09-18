import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from "../stylesheet/reset.js";
import { SignIn } from "./SignInPage.js";
import { HomePage } from './HomePage.js'
import { SignUp } from "./SignUpPage.js";
import UserContext from "../contexts/UserContext.js";
import { useEffect, useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({
    name: '',
    profilePictureURL: '',
    token: ''
  });

  useEffect(() => {
    const userLocalStorage = JSON.parse(localStorage.getItem('user'));

    //usuário logado
    if (user.token !== '' && userLocalStorage !== null) {
      setIsAuthenticated(true);
      return
    }

    //usuário nao fez signup nem esta logado
    if (userLocalStorage === null && user.token === '') {
      setIsAuthenticated(false);
      return
    }
  }, [isAuthenticated])

  return (
    <>
      <Reset />
      <UserContext.Provider value={{ user, setUser, setIsAuthenticated }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/homepage" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;