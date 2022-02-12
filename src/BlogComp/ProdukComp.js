import React, { useState } from "react";
import { Container, Card, Button, Col, Row } from "react-bootstrap";
import "./style.css";

const ProdukComp = () => {
  const [t, st] = useState(0);
  const tj = () => {
    st((s) => s + 1);
  };
  const kj = () => { if (t > 0) {
      st( ( k ) => k - 1 );
    }
  };

  const [q, sq] = useState(0);
  const ti = () => {
    sq( ( a ) => a + 1 );
  };
  const tg = () => {
    if ( q > 0 ) {
      sq( ( b ) => b - 1 );
    }
  };

  const [y, yt] = useState(0);
  const u = () => {yt((o) => o + 1)};

  const ik = () => {if (y > 0) {yt((w) => w - 1);}};

  const [r, rq] = useState(0)
  const vr = () => {
    rq((d) => d + 1)
  }

  const kr = () => {
    if( r > 0 ) {
      rq((ds) => ds - 1)}}

  return (
    <div>
      <Container className="mt-4 d-flex justify-content-center blog-wrap">
        <Row>
          <Col xs={6} md={6} lg={3}>
            <Card className="card" style={{ width: "14rem" }}>
              <Card.Img
                variant="top"
                src="https://cf.shopee.co.id/file/529a3ecc9105dea7571bd7af1ba0190c_tn"
              />
              <Card.Body>
                <Card.Title>Baju Gamis</Card.Title>
                <Card.Text>Rp. 150.000</Card.Text>
                <div>
                  <button style={{ marginRight: 5 }} onClick={kj}>
                    -
                  </button>
                  {t}
                  <button style={{ marginLeft: 5 }} onClick={tj}>
                    +
                  </button>
                </div>
                <br />
                <Button variant="primary">Beli Sekarang</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <Card className="card" style={{ width: "14rem" }}>
              <Card.Img
                variant="top"
                src="https://cf.shopee.co.id/file/e792f1cdf8f6254ea27c1bc2fee71476_tn"
              />
              <Card.Body>
                <Card.Title>Laptop Acer</Card.Title>
                <Card.Text>Rp. 3.500.000</Card.Text>
                <div>
                  <button style={{ marginRight: 5 }} onClick={tg}>
                    -
                  </button>
                  {q}
                  <button style={{ marginLeft: 5 }} onClick={ti}>
                    +
                  </button>
                </div>
                <br />
                <Button variant="primary">Beli Sekarang</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <Card className="card" style={{ width: "14rem" }}>
              <Card.Img
                variant="top"
                src="https://cf.shopee.co.id/file/c5587c31a60521689fd0e3577cb3d791_tn"
              />
              <Card.Body>
                <Card.Title>Kipas Angin</Card.Title>
                <Card.Text>Rp. 300.000</Card.Text>
                <div>
                  <button style={{ marginRight: 5 }} onClick={ik}>
                    -
                  </button>
                  {y}
                  <button style={{ marginLeft: 5 }} onClick={u}>
                    +
                  </button>
                </div>
                <br />
                <Button variant="primary">Beli Sekarang</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <Card className="card" style={{ width: "14rem" }}>
              <Card.Img
                variant="top"
                src="https://cf.shopee.co.id/file/5d5788b2e3ab5bf0ed07e0ac331082f1_tn"
              />
              <Card.Body>
                <Card.Title>Jaket Hitam</Card.Title>
                <Card.Text>Rp. 150.000</Card.Text>
                <div>
                  <button style={{ marginRight: 5 }} onClick={kr}>
                    -
                  </button>
                  {r}
                  <button style={{ marginLeft: 5 }} onClick={vr}>
                    +
                  </button>
                </div>
                <br />
                <Button variant="primary">Beli Sekarang</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4 ml-5 mb-5 banner">
        <Row>
          <Col className="align-self-center texta">
            <h2>Produk Pilihan Anda</h2>
            <p>
              Lorem ipsum is a dummy text without any sense. It is a sequence of
              Latin words that, as they are positioned, do not form sentences
              with a complete sense.
            </p>
          </Col>
          <Col>
            <img
              style={{ width: 450, borderRadius: 40 }}
              src="https://cf.shopee.co.id/file/d6b61cff88c9f386a31fe1d5dcce26ce_xxhdpi"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProdukComp;
