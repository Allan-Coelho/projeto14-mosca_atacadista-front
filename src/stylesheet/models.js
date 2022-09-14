import styled from "styled-components";

const LogoStyle = styled.div`
    position: relative;
    left: 50px;

    img {
        position: absolute;
        height: 100px;
        transform: rotate(45deg);
        top: -20px;
        left: -110px;
    }
    
    h1 {
        color: white;
        font-size: 40px;
        font-weight: 400;
        
    }
`;

export { LogoStyle }