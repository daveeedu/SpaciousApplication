import React from "react";
import { Sidebarchar } from "../Arrays";

const Sidebarfriends = () => {
  return (
    <div  >
      {Sidebarchar.map((sidebar) => {
        return (
            <div className="d-flex justify-content-center ">
            <div className="d-flex" md={2} xs={1}>
              <div md={1} >
                <img className="frndBarPic rounded" width="50px" height="50px" src={sidebar.image} alt="img" />
              </div>
              <div md={1}>
                <h2 className="frndBarName px-3">{sidebar.name}</h2>
                <p  className="frndBarContent px-3">{sidebar.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebarfriends;
