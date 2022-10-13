import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import cartIcon from "../../assets/img/cart.png";
import "./Products.css";

const Products = (props) => {
  const routeChange = (itemId) => {
    return `/products/` + itemId;
  };

  return (
    <div>
      <Container>
        <Row>
          {props.product ? (
            props.product.map((item) => (
              <Col>
                <div className="product-card">
                  <div className="product-image">
                    {item.images[0] && (
                      <img
                        src={item.images[0]}
                        className="image-overlay"
                        alt={props.product.title}
                      />
                    )}
                    <Link
                      to={routeChange(item.id)}
                      className="product-button"
                      state={{ ProductId: item }}
                    >
                      <Button variant="outline-primary">View </Button>
                    </Link>
                  </div>
                  <div className="product-title">{item.title}</div>
                  <div className="bottom-wrapper">
                    <div className="product-price">${item.price}</div>
                    <div className="product-cart">
                      <img src={cartIcon} alt={"cart" + item.title}></img>
                      &ensp;ADD TO CART
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
