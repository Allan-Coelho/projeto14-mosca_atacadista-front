import mosca from '../images/mosca.png';
import styled from 'styled-components';
import { useState } from 'react';
import { ContentStyle, LogoStyle } from '../stylesheet/models.js';
import { Oval } from 'react-loader-spinner';
import { useNavigate, Link } from 'react-router-dom';
import { postSignUp } from '../services/services.js';
import { signInSchema } from '../Schemas/signInSchema.js';

function SignUp() {
    const navigate = useNavigate();
    const [validEntries, setValidEntries] = useState(false);
    const [isAble, setIsAble] = useState(true);
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const signUp = (event) => {
        event.preventDefault();
        const validation = signInSchema.validate(form, { abortEarly: false });

        if (validation.error) {
            alert(validation.error.message);
            setValidEntries(false);
        } else {
            setValidEntries(true);
        }

        validEntries ? (
            navigate('/homepage')
            /* postSignIn(form).then(setIsAble(false))
            .catch(function () {
                alert('Ocorreu um erro no login, tente novamente!');
                setIsAble(true);
            }).then(function (response) {
                if (response) {
                    console.log(response.data)
                    localStorage.clear();
                    localStorage.setItem( 'auth', JSON.stringify({ authorization: response.data.token}));
                    
                }
            }).finally(function(){
                setIsAble(true);
            }) */
        ) : <></>;
    }

    return (
        <>
            <Content>
                <Logo>
                    <img src={mosca} alt='' />
                    <h1>Mosca</h1>
                    <h1>Atacadista</h1>
                </Logo>

                <Form>
                    <form onSubmit={signUp}>
                        <input type="text" name='name' value={form.name} onChange={handleForm} placeholder='Nome' disabled={!isAble ? true : false} />
                        <input type="text" name='email' value={form.email} onChange={handleForm} placeholder='E-mail' disabled={!isAble ? true : false} />
                        <input type="password" name='password' value={form.password} onChange={handleForm} placeholder='Senha' disabled={!isAble ? true : false} />
                        <input type="text" name='profilePictureURL' value={form.profilePictureURL} onChange={handleForm} placeholder='URL da foto de perfil' disabled={!isAble} />
                        <input type="password" name='password' value={form.confirmPassword} onChange={handleForm} placeholder='Confirme sua senha' disabled={!isAble} />
                        <button type="submit">
                            {isAble ? 'Cadastrar' : <Oval
                                height="20"
                                width="80"
                                color='white'
                                secondaryColor="#AEA972"
                                visible={true}
                            />}
                        </button>
                    </form>
                </Form>

                <Link to='/'>
                    Já possui uma conta? Faca login!
                </Link>
            </Content>
        </>
    );
};

export { SignUp };

const Content = styled(ContentStyle)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
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
    left: 40px;

    img {
        height: 100px;
        top: -20px;
        left: -110px;
    }
    
    h1 {
        font-size: 40px;
    }
`;

const Form = styled.div`
    margin-top: 20px;
    font-family: 'Raleway';

    input {
        padding: 0 3%;
        margin: 0 0 10px 6%;
        width: 80%;
        height: 58px;
        border: none;
        border-radius: 5px;
        font-size: 20px
    }

    button {
        margin-left: 40%;
        height: 46px;
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