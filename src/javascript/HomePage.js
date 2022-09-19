import styled from "styled-components";
import { ContentStyle, SellingStyle } from "../stylesheet/models.js";
import { Link } from "react-router-dom";
import EmblaCarousel from "./EmblaCarousel.js";
import { getProducts, getProductsInPromotion } from "../services/services.js";
import { useEffect, useState } from "react";
import Menu from "./components/shared/Menu.js";

/* db.products.insertMany( [
    { url: "https://cdn.awsli.com.br/600x450/44/44273/produto/29988397/20d63df911.jpg", promotion: 25, productId: 'seila1', category: "Moda" },
    { url: "https://images.tcdn.com.br/img/img_prod/560775/camiseta_thrasher_magazine_classic_flame_preto_1382_3_8a440574411cd8e597b9529b3a1010f0.jpg", promotion: 50, productId: 'seila2', category: "Moda" },
    { url: "https://ayine.com.br/wp-content/uploads/2022/03/Miolo-diagonal-O-livro-dos-amigos-site.png", promotion: 100, productId: 'seila3', category: "Livros" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvk1JrdTgEob42dWCjxGcnhvAMxu1Elu_zCA&usqp=CAU", promotion: 75, productId: 'seila4', category: "Livros" },
    { url: "https://cf.shopee.com.br/file/4ceb615fe395053e65c28f42ce54e3fb", promotion: 45, productId: 'seila5', category: "Brinquedos" },
    { url: "https://cf.shopee.com.br/file/2001056a46f6c1a63a58d3010fd695e6", promotion: 45, productId: 'seila6', category: "Brinquedos" },
 ] ) */

function HomePage() {
  const auth = localStorage.getItem("auth");
  const config = { headers: { Authorization: "Bearer " + auth } };
  const [products, setProducts] = useState([]);
  let SLIDE_COUNT = 6;
  let slides = Array.from(Array(SLIDE_COUNT).keys());
  const [media, setMedia] = useState([[], [], [], [], [], []]);
  let mediaByIndex = (index) => media[index % media.length];

  useEffect(() => {
    getProducts(config).then(function (response) {
      if (response) {
        setProducts(response.data);
      }
    });
    getProductsInPromotion({
      headers: { Authorization: "Bearer " + auth },
    }).then(function (response) {
      if (response.data) {
        let arr = [];
        response.data.map((promotionProduct) => {
          arr.push([
            promotionProduct.url,
            promotionProduct.promotion,
            promotionProduct._id,
          ]);
        });
        setMedia(arr);
        mediaByIndex = (index) => media[index % media.length];
      }
    });
  }, []);

  return (
    <Content>
      <Menu />
      <EmblaCarousel slides={[slides, mediaByIndex]} />
      <Selling>
        {products ? (
          products.map((product) => {
            return (
              <Link
                to={"/products/?productId=" + product.productId}
                key={product.productId}
              >
                <img src={product.url} />
                <h2>{product.name}</h2>
                <h3>{product.value}</h3>
              </Link>
            );
          })
        ) : (
          <></>
        )}
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
    width: 100%;
  }
`;

const Selling = styled.div`
  display: table;
  margin-top: 20px;

  a {
    float: left;
    text-decoration: none;
    background-color: white;
    max-width: 42.5%;
    width: 42.5%;
    height: 210px;
    box-sizing: border-box;
    margin-top: 20px;
    border-radius: 15px;
    font-family: "Raleway";
    color: black;
    margin-left: 5%;
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
    }
  }
`;
