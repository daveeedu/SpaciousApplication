import React from "react";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Planets from "./Planets"
import Character from "./Character";

const MyTabs = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3 bb"
      >
        <Tab eventKey="home" title="Home">
          <Planets />
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <Character />
        </Tab>
      </Tabs>
    </div>
  );
};

export default MyTabs;
