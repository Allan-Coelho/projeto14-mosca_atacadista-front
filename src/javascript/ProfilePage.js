import styled, { keyframes } from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ContentStyle,
  LogoStyle,
  MenuStyle,
  SelectionStyle,
} from "../stylesheet/models.js";
import mosca from "../images/mosca.png";
import { getUser, putUser } from "../services/services.js";
import { Oval } from "react-loader-spinner";
import { Form } from "../stylesheet/models.js";
import { changeUserSchema } from "../Schemas/changeUserSchema.js";

function blinkingEffect() {
  return keyframes`
      50% {
        opacity: 0;
      }
    `;
}

function ProfilePage() {
  const [user, setUser] = useState(null);
  const token = JSON.parse(localStorage.getItem("auth"));
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const selectCategory = (event) => {
    const category = event.target.value;
    navigate("/products/?category=" + category);
  };
  const [form, setForm] = useState({
    name: "",
    profilePictureURL: "",
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function saveChanges(event) {
    event.preventDefault();
    const validation = changeUserSchema.validate(form, { abortEarly: false });

    if (validation.error !== undefined) {
      alert(validation.error.message);
      return;
    }

    if (
      form.name === user.name &&
      user.profilePictureURL === form.profilePictureURL
    ) {
      alert("salvo com sucesso");
      return;
    }

    const config = {
      headers: {
        Authorization: "Bearer" + " " + token,
      },
    };

    const body = {
      name: form.name,
      profilePictureURL: form.profilePictureURL,
    };

    setIsLoading(true);
    putUser(body, config).then(() => {
      alert("salvo com sucesso");
      setIsLoading(false);
    });
  }
  useEffect(() => {
    const config = {
      headers: {
        Authorization: "Bearer" + " " + token,
      },
    };
    const promise = getUser(config);

    setIsLoading(true);
    promise.then((response) => {
      const data = response.data;
      setUser(data);
      setForm({
        name: data.name,
        profilePictureURL: data.profilePictureURL,
      });
      setIsLoading(false);
    });
  }, [token]);

  return (
    <Content>
      <Menu>
        <Logo>
          <img src={mosca} alt="" />
          <h1>Mosca</h1>
          <h1>Atacadista</h1>
        </Logo>

        <div>
          <Selection>
            <select onChange={selectCategory}>
              <option value="0" defaultValue hidden>
                ▲
              </option>
              <option value="1">Eletrônicos</option>
              <option value="2">Áudio e video</option>
              <option value="3">Moda</option>
              <option value="4">Mercearia</option>
              <option value="5">Livros</option>
              <option value="6">Instrumentos Musicais</option>
              <option value="7">Promoção</option>
              <option value="8">Saúde</option>
              <option value="9">Decoração</option>
              <option value="10">Brinquedos</option>
            </select>
          </Selection>

          <Link to="/user">
            <ion-icon name="person"></ion-icon>
          </Link>
        </div>
      </Menu>
      <Wrapper>
        {isLoading || user === null ? (
          <Oval
            height="60"
            width="240"
            color="white"
            secondaryColor="#AEA972"
            visible={true}
          />
        ) : (
          <>
            <ProfilePicture src={user.profilePictureURL} />
            <Name>{user.name}</Name>
            <Form>
              <form onSubmit={saveChanges}>
                <FormsLabel for="name">Nome:</FormsLabel>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  id="name"
                  onChange={handleForm}
                  placeholder="Nome"
                  disabled={isLoading}
                />
                <FormsLabel for="name">Foto de Perfil:</FormsLabel>
                <input
                  type="text"
                  name="profilePictureURL"
                  id="profilePictureURL"
                  value={form.profilePictureURL}
                  onChange={handleForm}
                  placeholder="URL da foto de perfil"
                  disabled={isLoading}
                />
                <button type="submit">
                  {!isLoading ? (
                    "Salvar"
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

            <BannerAddProduct>
              <Link to="/product">
                <AddProduct>{"Venha vender conosco!"}</AddProduct>
              </Link>
            </BannerAddProduct>
          </>
        )}
      </Wrapper>
    </Content>
  );
}

export { ProfilePage };

const Selection = styled(SelectionStyle)``;
const Menu = styled(MenuStyle)``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 110px 10px 0px 10px;
`;
const Name = styled.span`
  font-size: 24px;
  margin-top: 5px;
  font-family: "Raleway";
  font-weight: 500;
  color: white;
`;
const Logo = styled(LogoStyle)`
  left: 100px;
  width: 120px;
`;
const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: 1px white solid;
`;
const Content = styled(ContentStyle)`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;

  p {
    position: absolute;
    top: 45%;
    padding: 0 30%;
    font-family: "Raleway";
    text-align: center;
  }
`;
const FormsLabel = styled.span`
  font-size: 20px;
  padding: 0 3%;
  color: white;
  margin: 0px 0px 0px 10px;
  width: 80%;
`;

const BannerAddProduct = styled.div`
  background-color: #c6ae82;
  border-radius: 5px;
  height: 75px;
  width: 80%;
  margin-top: 20px;
  cursor: pointer;
  animation: ${blinkingEffect} 1.5s linear infinite;
  a {
    text-decoration: none;
  }
`;

const AddProduct = styled.span`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-family: "Raleway";
  font-size: 35px;
  font-weight: 700;
  color: white;
`;
