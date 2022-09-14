import mosca from '../images/mosca.png';
import styled from 'styled-components';
import { ContentStyle } from '../stylesheet/models'

function SignIn () {
    return (
        <>
            <Content>
                <Logo>
                    <img src={mosca} />
                    <h1>Mosca</h1>
                    <h1>Atacadista</h1>
                </Logo>

                <form>
                    
                </form>
                
            </Content>
        </>
    );
};

export { SignIn };

const Content = styled(ContentStyle)`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.div`
    position: relative;
    left: 45px;

    img {
        position: absolute;
        height: 100px;
        transform: rotate(45deg);
        top: -40px;
        left: -90px;
    }
    
    h1 {
        color: white;
        font-size: 40px;
    }
`;