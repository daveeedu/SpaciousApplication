import React from "react";
import  Navbar  from 'react-bootstrap/Navbar'

const Navigationbar = () => {
  return (
    <div>
      <Navbar  >
        <Navbar.Brand className=" fw-bold"  href="#">Spacious</Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Navigationbar;