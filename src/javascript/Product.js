import mosca from '../images/mosca.png';
import styled from 'styled-components';
import { ContentStyle, LogoStyle, MenuStyle, SelectionStyle, ContentBoxStyle, MainInfoStyle } from '../stylesheet/models';
import { useNavigate, Link } from "react-router-dom";
import EmblaCarousel from "./EmblaCarouselProduct";

function Product (){
    const navigate = useNavigate();
    let SLIDE_COUNT = 6;
    let slides = Array.from(Array(SLIDE_COUNT).keys());
    let media = [["https://cdn.awsli.com.br/600x450/44/44273/produto/29988397/20d63df911.jpg", 0], ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi58uIlj8FdzAtwUxZmvuSsZZ37efS_H0naQ&usqp=CAU', 0], [], [], [], []]
    let mediaByIndex = index => media[index % media.length];

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

            <ContentBox>
                <EmblaCarousel slides={[slides, mediaByIndex]} />

                <MainInfo>
                    <h2>Camisa</h2>
                    <h3>22,50</h3>
                </MainInfo>

                <div>
                    <p>Descrição:</p>
                    <p>nao sei o que nao sei o que nao sei o que nao sei o que nao sei o que nao sei o que nao sei o que nao sei o que </p>
                </div>
            </ContentBox>
        </Content>
    );
}

export { Product };

const Content = styled(ContentStyle)`
    display: flex;
    align-items: center;
    flex-direction: column;

    
`;

const Logo = styled(LogoStyle)`
    left: 100px;
    width: 120px;
`;

const Menu = styled(MenuStyle)``;

const Selection = styled(SelectionStyle)``;

const ContentBox = styled(ContentBoxStyle)`
    .embla {
        max-width: 100%;
        padding: 0;
    }

    .embla__slide {
        min-width: 100%;
    }    

    .embla__slide__inner {
        height: 80vw;
        border-radius: 15px 15px 0 0;
    }

    .embla__slide__img {
        position: absolute;
    }

    &  > div {
        padding: 3%;

        p {
            margin-top: 10px;
            font-family: 'Raleway'
        }
    }
`;

const MainInfo = styled(MainInfoStyle)``;