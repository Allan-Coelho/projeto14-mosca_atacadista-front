import styled from "styled-components";
import { ContentBoxStyle, LogoStyle, SelectionStyle } from "../stylesheet/models";
import mosca from '../images/mosca.png';
import { useNavigate, Link } from "react-router-dom";

function HomePage () {
    const navigate = useNavigate();

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
           
        </Content>
    );
}

export { HomePage };

const Content = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(to top, #AEA972, #6A8E7F );

    h1 {
        text-decoration: none;
        color: white;
        text-align: center;
        width: 30%;
    }
`;

const Logo = styled(LogoStyle)`
    font-family: 'Lobster';
    left: 100px;
    width: 120px;
`;

const Menu = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        margin-right: 20px;
    }

    ion-icon  {
        margin-right: 10px;
        font-size: 32px;
        color: #3d5248;
    }
`;

const Selection = styled(SelectionStyle)``;

const ContentBox = styled(ContentBoxStyle)``;