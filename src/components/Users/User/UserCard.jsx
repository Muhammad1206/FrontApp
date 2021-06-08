import React from "react";
import "./Card.css";

export const UserCard = (props) => {
  return (
    <div className="col s12 m7 card-container">
      <div className="card horizontal">
        <div className="card-image">
          <img src={props.img} />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>
                id: {props.idUser}
              <br/>  occupation: {props.occupation}, 
              <br /> category :{props.category}
              <br /> birthday: {props.birthday}
              <br/>  portrayed: {props.portrayed}
              <br/>  status: {props.status}
            </p>
          </div>
          <div className="card-action">
            <span>{props.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
