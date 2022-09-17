import styled from "styled-components";
import { ContentStyle, LogoStyle, MenuStyle, SelectionStyle, SellingStyle } from "../stylesheet/models";
import mosca from '../images/mosca.png';
import { useNavigate, Link } from "react-router-dom";
import EmblaCarousel from "./EmblaCarousel";
import { getProducts, getProductsInPromotion } from "../services/MoscaAtacadista";
import { useEffect } from "react";

/* db.products.insertMany( [
    { url: "https://cdn.awsli.com.br/600x450/44/44273/produto/29988397/20d63df911.jpg", promotion: 25, productId: 'seila1', category: "Moda" },
    { url: "https://images.tcdn.com.br/img/img_prod/560775/camiseta_thrasher_magazine_classic_flame_preto_1382_3_8a440574411cd8e597b9529b3a1010f0.jpg", promotion: 50, productId: 'seila2', category: "Moda" },
    { url: "https://ayine.com.br/wp-content/uploads/2022/03/Miolo-diagonal-O-livro-dos-amigos-site.png", promotion: 100, productId: 'seila3', category: "Livros" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvk1JrdTgEob42dWCjxGcnhvAMxu1Elu_zCA&usqp=CAU", promotion: 75, productId: 'seila4', category: "Livros" },
    { url: "https://cf.shopee.com.br/file/4ceb615fe395053e65c28f42ce54e3fb", promotion: 45, productId: 'seila5', category: "Brinquedos" },
    { url: "https://cf.shopee.com.br/file/2001056a46f6c1a63a58d3010fd695e6", promotion: 45, productId: 'seila6', category: "Brinquedos" },
 ] ) */

function HomePage () {
    const navigate = useNavigate();
    const auth = JSON.parse(localStorage.getItem('auth'));
    const config = { headers:{'Authorization': 'Bearer '+ auth}};
    let products = [];
    let promotionProducts = [];
    let SLIDE_COUNT = 6;
    let slides = Array.from(Array(SLIDE_COUNT).keys());
    let media = [[], [], [], [], [], []]
    let mediaByIndex = index => media[index % media.length];

    useEffect(() => {
        products = getProducts(config).then(
            function (response) {
                if (response) {
                    return(response.data);
                }
            })

        getProductsInPromotion({headers:{'Authorization': 'Bearer '+ auth}, params: { category: 'Promocao'}}).then(
            function (response) {
                if (response.data) {
                    promotionProducts = response.data;
                    console.log(response.data)
                    promotionProducts.map((promotionProduct) => {
                        media.push([promotionProduct.url, promotionProduct.promotion, promotionProduct._id]);
                    })
                    mediaByIndex = index => media[index % media.length]
                }
            })
    }, [])

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

            <EmblaCarousel slides={[slides, mediaByIndex]} />
                
            <Selling>
                    {products ? (products.map((product) => {
                            return (
                                <Link to={'/products/?productId='+product.productId} key={product.productId}>
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