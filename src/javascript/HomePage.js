import styled from "styled-components";
import { ContentStyle, LogoStyle, MenuStyle, SelectionStyle, SellingStyle } from "../stylesheet/models.js";
import mosca from '../images/mosca.png';
import { useNavigate, Link } from "react-router-dom";
import EmblaCarousel from "./EmblaCarousel.js";
import { getProducts, getProductsInPromotion } from "../services/services.js";
import { useEffect, useState } from "react";

function HomePage () {
    const navigate = useNavigate();
    const auth = JSON.parse(localStorage.getItem('user'));
    const config = { headers:{'Authorization': 'Bearer '+ auth}};
    const [ products, setProducts ] = useState([]);
    let SLIDE_COUNT = 6;
    let slides = Array.from(Array(SLIDE_COUNT).keys());
    const [ media, setMedia ] = useState([[], [], [], [], [], []])
    let mediaByIndex = index => media[index % media.length];
    
    useEffect(() => {
        getProducts(config).then(
            function (response) {
                if (response) {
                    setProducts(response.data);
                }
            })
        getProductsInPromotion({headers:{'Authorization': 'Bearer '+ auth}}).then(
            function (response) {
                if (response.data) {
                    let arr = [];
                    response.data.map((promotionProduct) => {
                        arr.push([promotionProduct.url, promotionProduct.promotion, promotionProduct._id]);
                    })
                    setMedia(arr);
                    mediaByIndex = index => media[index % media.length];
                }
            })
    }, []);
    
    const selectCategory = (event) => {
        const category = event.target.value;
        navigate('/products/'+category)
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

            <EmblaCarousel slides={[slides, mediaByIndex]} />
                
            <Selling>
                    {products ? (products.map((product) => {
                            return (
                                <Link to={'/product/'+product.productId} key={product.productId}>
                                    <img src={product.url}/>
                                    <h2>{product.name}</h2>
                                    <h3>{product.value}</h3>
                                </Link>
                            );
                        })) : <></>}
            </Selling>
        
        </Content>
    );
}

export { HomePage };

const Content = styled(ContentStyle)`
    display: flex;
    align-items: center;
    flex-direction: column;

    .embla {
        margin-top: 120px;
        width: 100%
    }
`;

const Logo = styled(LogoStyle)`
    left: 100px;
    width: 120px;
`;

const Menu = styled(MenuStyle)``;

const Selection = styled(SelectionStyle)``;

const Selling = styled(SellingStyle)``;