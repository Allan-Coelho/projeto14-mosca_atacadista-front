import styled from "styled-components";
import Logo from "./components/shared/Logo.js";
import { useState } from "react";
import { ContentStyle, Form } from "../stylesheet/models.js";
import { Oval } from "react-loader-spinner";
import { useNavigate, Link } from "react-router-dom";
import { postSignIn } from "../services/services.js";
import { signInSchema } from "../Schemas/signInSchema.js";

function SignIn() {
  const navigate = useNavigate();
  const [validEntries, setValidEntries] = useState(false);
  const [isAble, setIsAble] = useState(true);
  const [form, setForm] = useState({
      email: '',
      password: '',
  });

  function handleForm (e) {
      setForm({
      ...form,
      [e.target.name]: e.target.value,
      })
  }
  
  const makeSignIn = (event) => {
    const validation = signInSchema.validate(form, { abortEarly: false });
    
    if (validation.error) {
        alert(validation.error.message);
        setValidEntries(false);
    } else {
        setValidEntries(true);
    }

    
    validEntries ? (
      postSignIn(form)
        .then(setIsAble(false))
        .catch(function () {
          alert("Ocorreu um erro no login, tente novamente!");
          setIsAble(true);
        })
        .then(function (response) {
          if (response) {
            localStorage.clear();
            localStorage.setItem("auth", JSON.stringify(response.data));
            navigate("/");
          }
        })
        .finally(function () {
          setIsAble(true);
        })
    ) : (
      <></>
    );

    event.preventDefault();
  };

  return (
    <>
      <Content>
        <Logo size="large" />

        <FormStyle>
        
          <Form>
            <form onSubmit={makeSignIn}>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleForm}
                placeholder="E-mail"
                disabled={!isAble ? true : false}
              />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleForm}
                placeholder="Senha"
                disabled={!isAble ? true : false}
              />
              <button type="submit">
                {isAble ? (
                  "Entrar"
                ) : (
                  <Oval
                    height="20"
                    width="80"
                    color="white"
                    secondaryColor="#AEA972"
                    visible={true}
                  />
                )}
              </button>
            </form>
          </Form>
        </FormStyle>

        <Link to="/signUp">Não possui um login? Cadastre-se!</Link>
      </Content>
    </>
  );
}

export { SignIn };

const Content = styled(ContentStyle)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  a {
    text-decoration: none;
    color: white;
    text-align: center;
    margin-top: 50px;
    width: 30%;
  }
`;

const FormStyle = styled(Form)`
  button {
    margin-left: 45%;
  }
`;