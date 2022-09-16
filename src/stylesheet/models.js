import styled from "styled-components";

const LogoStyle = styled.div`
    position: relative;
    font-family: 'Lobster';

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
    margin-top: 120px;
    width: 90%;
    border-radius: 25px;
`;

const ContentStyle = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #AEA972, #6A8E7F );
`;

const MenuStyle =  styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(to top, #75927D, #6A8E7F );
    -moz-box-shadow: 0 10px 10px #75927D;
    -webkit-box-shadow: 0 10px 10px #75927D;
    box-shadow: 0 10px 10px #75927D;
    z-index: 4;

    div {
        margin-right: 20px;
    }

    ion-icon  {
        margin-right: 10px;
        font-size: 32px;
        color: #3d5248;
    }
`;

export { LogoStyle, SelectionStyle, ContentBoxStyle, ContentStyle, MenuStyle };