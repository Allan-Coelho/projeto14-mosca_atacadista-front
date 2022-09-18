import styled from "styled-components";

const LogoStyle = styled.div`
  position: relative;
  font-family: "Lobster";

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

const Form = styled.div`
  margin-top: 20px;
  font-family: "Raleway";

  input {
    padding: 0 3%;
    margin: 0 0 10px 6%;
    width: 80%;
    height: 58px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
  }

  button {
    margin-left: 40%;
    height: 46px;
    border: none;
    padding: 5px;
    border-radius: 5px;
    background-color: #4e6a5e;
    color: white;
    margin-top: 10px;
    cursor: pointer;
    font-size: 20px;
  }

  input::placeholder {
    color: black;
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
    font-family: "Raleway";

    option {
      font-size: 24px;
      background-color: #6a8e7f;
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
  background: linear-gradient(to top, #aea972, #6a8e7f);
`;

const MenuStyle = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 95px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to top, #75927d, #6a8e7f);
  -moz-box-shadow: 0 10px 10px #75927d;
  -webkit-box-shadow: 0 10px 10px #75927d;
  box-shadow: 0 10px 10px #75927d;
  z-index: 4;

  div {
    margin-right: 20px;
  }

  ion-icon {
    margin-right: 10px;
    font-size: 32px;
    color: #3d5248;
  }
`;

export {
  LogoStyle,
  SelectionStyle,
  ContentBoxStyle,
  ContentStyle,
  MenuStyle,
  Form,
};
