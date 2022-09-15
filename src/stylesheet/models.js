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
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(to top, #75927D, #6A8E7F );
    -moz-box-shadow: 0 20px 20px #75927D;
    -webkit-box-shadow: 0 20px 20px #75927D;
    box-shadow: 0 20px 20px #75927D;

    div {
        margin-right: 20px;
    }

    ion-icon  {
        margin-right: 10px;
        font-size: 32px;
        color: #3d5248;
    }
`;

const CarouselStyle = styled.div`
    width: 100vw;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transform-style: preserve-3d;
    perspective: 600px;
    --items: 5;
    --middle: 3;
    --position: 1;
    pointer-events: none;

    div .item {
        position: absolute;
        width: 300px;
        height: 400px;
        background-color: coral;
        --r: calc(var(--position) - var(--offset));
        --abs: max(calc(var(--r) * -1), var(--r));
        transition: all 0.25s linear;
        transform: rotateY(calc(-10deg * var(--r)))
            translateX(calc(-300px * var(--r)));
        z-index: calc((var(--position) - var(--abs)));
    }


    input:nth-of-type(1):checked ~ main#carousel {
    --position: 1;
    }

   
    input:nth-of-type(2):checked ~ main#carousel {
    --position: 2;
    }

    
    input:nth-of-type(3):checked ~ main#carousel {
    --position: 3;
    }

    
    input:nth-of-type(4):checked ~ main#carousel {
    --position: 4;
    }

   
    input:nth-of-type(5):checked ~ main#carousel {
    --position: 5;
    }

`;

export { LogoStyle, SelectionStyle, ContentBoxStyle, ContentStyle, MenuStyle, CarouselStyle };