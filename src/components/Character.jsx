import React from "react";
import Card from "react-bootstrap/Card";
import { characters } from "../Arrays";
import Col from "react-bootstrap/Col"
import Sidebar from "./Sidebarone";
import { useState } from "react";
import Addcharacter from "./Addcharacter";




const Character = () => {
    const [Character, setCharacter] = useState(false)
    const sideclick = () => (setCharacter(!Character))
  return (
    <div className="container row g-4">
      {characters.map((character) => {

        return (
              <Col className="d-flex justify-content-between"  md={3} lg={4} xl={3} onClick={sideclick}>
                <Card className="shape2" href="/sidebar">
                  <Card.Img className="character-img" variant="top" src={character.image} />
                  <Card.Body>
                    <Card.Title className="ps-3 pt-2">{character.name}</Card.Title>
                    <Card.Text className="ps-3 pb-2">{character.friends}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
        );
      })}
      <Addcharacter />
      {
          Character && <Sidebar />
      }
    </div>
  );
};

export default Character;
