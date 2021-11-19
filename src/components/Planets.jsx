import React from "react";
import Card from "react-bootstrap/Card";
import { planets } from "../Arrays";
import { useState } from "react";
import Sidebartwo from "./Sidebartwo";
import Addplanet from "./Addplanet";
import { Col } from "react-bootstrap";

const Planets = () => {
    const [Planets, setPlanet] = useState(false)
    const sideclicktwo = () => (setPlanet(!Planets))
  return (
    <div className="container d-flex row ">
      {planets.map((planet) => {
        return (
          <Col className="d-flex pb-4 justify-content-between" sm={3}  md={3} lg={4} xl={3} onClick={sideclicktwo}>
          <Card className="shape2" href="/sidebar">
            <Card.Img className="character-img" variant="top" src={planet.image} />
            <Card.Body>
              <Card.Title className="ps-3 pt-2">{planet.name}</Card.Title>
              <Card.Text className="ps-3 pb-2">{planet.prop}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        );
      })}
      <Addplanet />
      {
          Planets && <Sidebartwo />
      }
    </div>
  );
};

export default Planets;
