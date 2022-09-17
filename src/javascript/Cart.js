import mosca from '../images/mosca.png';
import styled from 'styled-components';
import { ContentStyle, LogoStyle, MenuStyle, SelectionStyle, SellingLongStyle} from '../stylesheet/models';
import { useNavigate, Link } from "react-router-dom";

function Cart (){
    const navigate = useNavigate();
    let cartProducts = [{_id: 'teste', url: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi58uIlj8FdzAtwUxZmvuSsZZ37efS_H0naQ&usqp=CAU'], promotion: 10, value: 22.5, name: 'camisa'}];

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
                            <option value="1">Eletrônicos</option>
                            <option value="2">Áudio e video</option>
                            <option value="3">Moda</option>
                            <option value="4">Mercearia</option>
                            <option value="5">Livros</option>
                            <option value="6">Instrumentos Musicais</option>
                            <option value="7">Promoção</option>
                            <option value="8">Saúde</option>
                            <option value="9">Decoração</option>
                            <option value="10">Brinquedos</option>
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
                <SelectionLong>
                    {cartProducts.length === 0 ? (<><p>Nenhum produto adicionado ao carrinho ainda. Continue comprando!</p></>) : (
                        cartProducts.map((product) => {
                            return (
                                <div key={product._id}>
                                    <Link to={'/product/'+product._id} >
                                        <div>
                                            <img src={product.url[0]}/>
                                        </div>  
                                        <div>
                                            <h2>{product.name}</h2>
                                            <h3>{product.value}</h3>
                                        </div>
                                        <div>
                                            <span>

                                            </span>
                                            <span>
                                                
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                               
                            );
                        })
                    )}
                </SelectionLong>
               
        </Content>
    );
}

export { Cart };

const Content = styled(ContentStyle)`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;

    p {
        position: absolute;
        top: 45%;
        padding: 0 30%;
        font-family: 'Raleway';
        text-align: center;
    } 
`;

const Logo = styled(LogoStyle)`
    left: 100px;
    width: 120px;
`;

const Menu = styled(MenuStyle)``;

const Selection = styled(SelectionStyle)``;

const SelectionLong = styled(SellingLongStyle)`

`;