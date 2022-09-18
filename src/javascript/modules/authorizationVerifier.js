import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext.js";
function Authentication() {
    const { isAuthenticated } = useContext(UserContext);
    const navigate = useNavigate();

    isAuthenticated ? <></> : navigate('/');
}

export default Authentication;