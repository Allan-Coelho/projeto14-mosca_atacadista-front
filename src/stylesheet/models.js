import styled from "styled-components";

const LogoStyle = styled.div`
    position: relative;

    img {
        position: absolute;
        height: 60px;
        transform: rotate(45deg);
        top: -8px;
        left: -68px;
    }
    
    h1 {
        color: white;
        font-size: 25px;
        font-weight: 400;
    }
`;

const SelectionStyle = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    
    select {
        appearance: none;
        position: absolute;
        left: -46px;
        bottom: -42px;
        margin-right: 6px;
        font-size: 38px;
        color: #3d5248;
        appearance: none;
        text-align: center;
        border: none;
        width: 38px;
        transform: rotate(180deg);
        background-color: transparent;
        height: 38px;
        font-family: 'Raleway';

        option {
            font-size: 24px;
            background-color: #6A8E7F;
            padding: 0;
        }
    }
`;

const ContentBoxStyle = styled.div`
    background-color: white;
    width: 80%;
    height: max-content;
`;

export { LogoStyle, SelectionStyle, ContentBoxStyle }