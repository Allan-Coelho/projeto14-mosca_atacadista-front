import styled from "styled-components";
import { ContentStyle, LogoStyle, MenuStyle, SelectionStyle } from "../stylesheet/models.js";
import mosca from '../images/mosca.png';
import { useNavigate, Link } from "react-router-dom";
import EmblaCarousel from "./EmblaCarousel.js";
import media1 from "../media/media1.jpg";
import media2 from "../media/media2.jpeg";
import media3 from "../media/media3.jpeg";
import media4 from "../media/media4.jpeg";
import { useContext } from "react";
import UserContext from "../contexts/UserContext.js";
import Authentication from "./modules/authorizationVerifier.js";

function HomePage() {
    const navigate = useNavigate();
    const SLIDE_COUNT = 6;
    const slides = Array.from(Array(SLIDE_COUNT).keys());
    const { user } = useContext(UserContext);
    const selectCategory = (event) => {
        const category = event.target.value;
        navigate('/products/?category=' + category)
    }

    return (
        <Content>
            <Authentication />
            <Menu>
                <Logo>
                    <img src={mosca} alt='' />
                    <h1>Mosca</h1>
                    <h1>Atacadista</h1>
                </Logo>

                <div>
                    <Selection>
                        <select onChange={selectCategory}>
                            <option value="0" defaultValue hidden>▲</option>
                            <option value="1">produto1</option>
                            <option value="2">produto2</option>
                            <option value="3">produto3</option>
                            <option value="4">produto4</option>
                        </select>
                    </Selection>

                    <Link to='/cart'>
                        <ion-icon name="cart"></ion-icon>
                    </Link>

                    <Link to='/user'>
                        <ion-icon name="person"></ion-icon>
                    </Link>
                </div>
            </Menu>

            <EmblaCarousel slides={slides} />

            <Selling>
                <Link to='/products/?productId=1'>
                    <img src={media1} />
                    <h2>Nome</h2>
                    <h3>Valor</h3>
                </Link>
                <Link to='/products/?productId=1'>
                    <img src={media2} />
                    <h2>Nome</h2>
                    <h3>Valor</h3>
                </Link>
                <Link to='/products/?productId=1'>
                    <img src={media3} />
                    <h2>Nome</h2>
                    <h3>Valor</h3>
                </Link>
                <Link to='/products/?productId=1'>
                    <img src={media4} />
                    <h2>Nome</h2>
                    <h3>Valor</h3>
                </Link>
                <Link to='/products/?productId=1'>
                    <img src={media3} />
                    <h2>Nome</h2>
                    <h3>Valor</h3>
                </Link>
                <Link to='/products/?productId=1'>
                    <img src={media4} />
                    <h2>Nome</h2>
                    <h3>Valor</h3>
                </Link>
            </Selling>

        </Content>
    );
}

export { HomePage };

const Content = styled(ContentStyle)`
    display: flex;
    align-items: center;
    flex-direction: column;

    .embla {
        margin-top: 120px;
        width: 80%
    }
`;

const Logo = styled(LogoStyle)`
    left: 100px;
    width: 120px;
`;

const Menu = styled(MenuStyle)``;

const Selection = styled(SelectionStyle)``;

const Selling = styled.div`
    display: table;
    margin-top: 20px;

    a {
        float: left;
        text-decoration: none;
        background-color: white;
        max-width: 42.5%;
        width: 42.5%;
        height: 210px;
        box-sizing: border-box;
        margin-top: 20px;
        border-radius: 15px;
        font-family: 'Raleway';
        color: black;
        margin-left: 5%;
        position: relative;

        img {
            border-radius: 15px 15px 0 0;
            width: 100%;
            height: 70%;
        }

        h2 {
            margin-left: 10px;
        }

        h3 {
            position: absolute;
            right: 10px;
            bottom: 5px;
            text-align: right;
        }
    }

`;