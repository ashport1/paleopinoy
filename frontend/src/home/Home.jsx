import React from "react";
import { Carousel, Row, Col, Card } from "react-bootstrap";
import "./home.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="ampalaya.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Ginisang Ampalaya</h3>
                <p>Heart healthy ampalaya, with a touch of egg.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="bilo.jpg" alt="Third slide" />

              <Carousel.Caption>
                <h3>Bilo Bilo</h3>
                <p>
                  A Filipino comfort dessert made with easy-to-access
                  ingredients.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="osso.jpg" alt="Third slide" />

              <Carousel.Caption>
                <h3>Osso Buco</h3>
                <p>A beloved classical Italian favorite, in the Instant Pot.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row className="mx-4 mt-4">
          {/* <Col className="col-3 "> */}
            <Card className="col-3 ">
              <Card.Img src="toast.jpg" />
            </Card>
          {/* </Col> */}
          {/* <Col className="col-3"> */}
            <Card className="col-3 ">
              <Card.Img src="egg.jpg" />
            </Card>
          {/* </Col>
          <Col className="col-3"> */}
            <Card className="col-3 ">
              <Card.Img  src="potate.jpg" />
            </Card>
          {/* </Col>

          <Col className="col-3"> */}
            <Card className="col-3 ">
              <Card.Img  src="avo.jpg" />
            </Card>
          {/* </Col> */}
        </Row>
      </>
    );
  }
}

export default Home;
