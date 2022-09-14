import mosca from '../images/mosca.png';
import styled from 'styled-components';
import { useState } from 'react';
import { LogoStyle } from '../stylesheet/models';
import { Oval } from 'react-loader-spinner';
import {  useNavigate, Link } from 'react-router-dom';
import joi from 'joi';
import { joiPasswordExtendCore } from 'joi-password';
import { postSignIn } from '../services/MoscaAtacadista';

const joiPassword = joi.extend(joiPasswordExtendCore);

const schemaLogin = joi.object({
    email: joi.string()
        .email({tlds: { allow: false }})
        .required(),

    password: joiPassword
        .string()
        .minOfSpecialCharacters(1)
        .minOfLowercase(1)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .noWhiteSpaces()
        .required()
})

function SignIn () {
    const navigate = useNavigate();
    const [validEntries, setValidEntries] = useState(false);
    const [isAble, setIsAble] = useState(true);
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    function handleForm (e) {
        setForm({
        ...form,
        [e.target.name]: e.target.value,
        })
    }
    
    const makeSignIn = (event) => {
        const validation = schemaLogin.validate(form, { abortEarly: false });
        
        if (validation.error) {
            alert(validation.error.message);
            setValidEntries(false);
        } else {
            setValidEntries(true);
        }

        validEntries ? (
            postSignIn(form).then(setIsAble(false))
            .catch(function () {
                alert('Ocorreu um erro no login, tente novamente!');
                setIsAble(true);
            }).then(function (response) {
                if (response) {
                    localStorage.clear();
                    localStorage.setItem( 'auth', JSON.stringify({ authorization: response.data.token, name: response.data.name}));
                    navigate('/homepage');
                }
            }).finally(function(){
                setIsAble(true);
            })
        ) : <></>;

        event.preventDefault();
    }

    return (
        <>
            <Content>
                <Logo>
                    <img src={mosca} alt=''/>
                    <h1>Mosca</h1>
                    <h1>Atacadista</h1>
                </Logo>

                <Form>
                    <form onSubmit={makeSignIn}>
                        <input type="email" name='email' value={form.email} onChange={handleForm} placeholder='E-mail' disabled={!isAble ? true : false} />
                        <input type="password" name='password' value={form.password} onChange={handleForm} placeholder='Senha' disabled={!isAble ? true : false} />
                        <button type="submit">
                            {isAble ? 'Entrar' : <Oval 
                                height="20" 
                                width="80"
                                color='white'
                                secondaryColor="#AEA972"
                                visible={true}
                            />}
                        </button>
                    </form>
                </Form>

                <Link to='/signUp'>
                    Não possui um login? Cadastre-se!
                </Link>
            </Content>
        </>
    );
};

export { SignIn };

const Content = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(to top, #AEA972, #6A8E7F );

    a {
        text-decoration: none;
        color: white;
        text-align: center;
        margin-top: 50px;
        width: 30%;
    }
`;

const Logo = styled(LogoStyle)`
    font-family: 'Lobster';
`;

const Form = styled.div`
    margin-top: 20px;
    font-family: 'Raleway';

    input {
        padding: 0 3%;
        margin: 0 0 10px 6%;
        width: 80%;
        height: 30px;
        border: none;
        border-radius: 5px;
    }

    button {
        margin-left: 40%;
        height: 30px;
        width: 20%;
        border: none;
        border-radius: 5px;
        background-color: #4e6a5e;
        color: white;
    }

    input::placeholder {
        color: black;
    }
`;