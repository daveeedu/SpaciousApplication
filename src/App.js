import React from "react"
// import { Route, Routes } from 'react-router';
// import { BrowserRouter as Router, } from 'react-router-dom';
import "./index.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navigationbar from "./components/Navigationbar"
import MyTabs from "./components/Mytabs";
// import Character from "./components/Character";
// import Planets from "./components/Planets";


const App = () => {
  return (
      <Container className="p-5">
        <Row>
          <Navigationbar />
          <MyTabs />
        </Row>
      </Container>
    
  );
};

export default App;
