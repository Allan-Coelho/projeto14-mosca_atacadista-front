import styled from "styled-components";
import { ContentStyle, LogoStyle, MenuStyle, SelectionStyle } from "../stylesheet/models";
import mosca from '../images/mosca.png';
import { useNavigate, Link } from "react-router-dom";
import EmblaCarousel from "./EmblaCarousel";

function HomePage () {
    const navigate = useNavigate();
    const SLIDE_COUNT = 6;
    const slides = Array.from(Array(SLIDE_COUNT).keys());

    const selectCategory = (event) => {
        const category = event.target.value;
        navigate('/products/?category='+category)
    }

    return (
        <Content>
            <Menu>
                <Logo>
                    <img src={mosca} alt=''/>
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
        
        </Content>
    );
}

export { HomePage };

const Content = styled(ContentStyle)`
    display: flex;
    align-items: center;
    flex-direction: column;

    .embla {
        margin-top: 140px;
        width: 80%
    }
`;

const Logo = styled(LogoStyle)`
    font-family: 'Lobster';
    left: 100px;
    width: 120px;
`;

const Menu = styled(MenuStyle)``;

const Selection = styled(SelectionStyle)``;

const CarouselPosition = styled.div`
    margin-top: 100px;

    span {
        background-color: white;
        width: 300px;
        height: 300px;
    }
`;