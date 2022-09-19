import styled from "styled-components";
import {
  ContentStyle,
  ContentBoxStyle,
  MainInfoStyle,
} from "../stylesheet/models.js";
import EmblaCarousel from "./EmblaCarouselProduct.js";
import Menu from "./components/shared/Menu.js";

function Product() {
  let SLIDE_COUNT = 6;
  let slides = Array.from(Array(SLIDE_COUNT).keys());
  let media = [
    [
      "https://cdn.awsli.com.br/600x450/44/44273/produto/29988397/20d63df911.jpg",
      0,
    ],
    [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi58uIlj8FdzAtwUxZmvuSsZZ37efS_H0naQ&usqp=CAU",
      0,
    ],
    [],
    [],
    [],
    [],
  ];
  let mediaByIndex = (index) => media[index % media.length];

  return (
    <Content>
      <Menu />
      <ContentBox>
        <EmblaCarousel slides={[slides, mediaByIndex]} />

        <MainInfo>
          <h2>Camisa</h2>
          <h3>22,50</h3>
        </MainInfo>

        <div>
          <p>Descrição:</p>
          <p>
            nao sei o que nao sei o que nao sei o que nao sei o que nao sei o
            que nao sei o que nao sei o que nao sei o que{" "}
          </p>
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

  & > div {
    padding: 3%;

    p {
      margin-top: 10px;
      font-family: "Raleway";
    }
  }
`;

const MainInfo = styled(MainInfoStyle)``;
