import React from "react";
import  Navbar  from 'react-bootstrap/Navbar'

const Navigationbar = () => {
  return (
    <div>
      <Navbar className="display-4" expand="lg" variant="light">
        <Navbar.Brand href="#">Spacious</Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Navigationbar;