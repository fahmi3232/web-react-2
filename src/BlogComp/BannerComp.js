import React from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import "./style.css";

const BannerComp = () => {
  return (
    <div>
      <Container className="mt-5 banner1">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cf.shopee.co.id/file/8d051d7a9ffba9bb57fd7cbaa1eb2a12_xxhdpi"
              alt="First slide"
            />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cf.shopee.co.id/file/a40f34129072e780cad0887645056092_xxhdpi"
              alt="Second slide"
            />

            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cf.shopee.co.id/file/f6eb73ce0c09bbdc28c126dd8f1e0047_xxhdpi"
              alt="Third slide"
            />

            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default BannerComp;
