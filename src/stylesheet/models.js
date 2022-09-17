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
        font-size: 38px;
        color: #3d5248;
        appearance: none;
        border: none;
        width: 38px;
        transform: rotate(180deg);
        background-color: transparent;
        height: 38px;
        font-family: 'Raleway';
        outline: 0;

        option {
            font-size: 24px;
            background-color: #6A8E7F;
        }
    }

    select:part(listbox) {
        padding: 10px;
        margin-top: 5px;
        border: 1px solid red;
        border-radius: 5px;
    }
`;

const ContentBoxStyle = styled.div`
    background-color: white;
    margin-top: 120px;
    width: 90%;
    border-radius: 25px;
    margin-bottom: 100px;
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

const SellingStyle = styled.div`
    display: table;
    margin: 20px;
    margin-left: 8%;

    a {
        float: left;
        text-decoration: none;
        background-color: white;
        max-width: 45%;
        width: 45%;
        height: 210px;
        box-sizing: border-box;
        margin-top: 20px;
        border-radius: 15px;
        font-family: 'Raleway';
        color: black;
        margin-right: 5%;
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
            color: #d45c3e;
        }
    }
`;

const SellingLongStyle = styled.div`
    margin-top: 190px;
    width: 100%;

    
    & div {
        background-color: white;
        width: 90%;
        height: 200px;
        border-radius: 15px;
        margin-left: 5%;
        
    }
    
    a {
        text-decoration: none;
        color: black;

        div {
            float: left;
            width: 33.3%;
            margin: 0;
            position: relative;

            img {
                border-radius: 15px 0 0 15px;
                height: 100%;
                width: 100%;
            }

            h2 {
                margin-left: 10px;
            }

            h3 {
                text-align: right;
                color: #d45c3e;
            }
        }

       

        
    }
    a :nth-child(3) {
        width: 10%;
        display: flex;
        flex-direction: row;

        & :nth-child(1) {
            height: 50%;
            width: 100%;
        }
        &  :nth-child(2) {
            height: 50%;
            width: 100%;
        }
    }

    a :nth-child(2) {
        width: 56.6%;
    }
`;

const  MainInfoStyle = styled.div`
    padding: 5% 10%;
    h2 {
        font-family: 'Raleway';
        font-size: 34px;
    }

    h3 {
        font-family: 'Raleway';
        text-align: right;
        color: #d45c3e;
        font-size: 24px;
    }
`;

export { LogoStyle, SelectionStyle, ContentBoxStyle, ContentStyle, MenuStyle, SellingStyle, MainInfoStyle, SellingLongStyle };