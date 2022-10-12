import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import cartIcon from "../../assets/img/cart.png";

const Products = (props) => {
  const [products, setProducts] = React.useState();

  const getProducts = async () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };
  React.useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          {products ? (
            products.map((item) => (
              <Col>
                <div className="product-card">
                  <div className="product-image">
                    {item.images[0] && <img src={item.images[0]} />}
                  </div>
                  <div className="product-title">{item.title}</div>
                  <div className="bottom-wrapper">
                    <div className="product-price">${item.price}</div>
                    <div className="product-cart">
                      <img src={cartIcon}></img>&ensp;ADD TO CART
                    </div>
                  </div>
                </div>
              </Col>
            ))
          ) : (
            <div
              style={{
                textAlign: "center",
                marginTop: "20%",
              }}
            >
              Loading...
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
