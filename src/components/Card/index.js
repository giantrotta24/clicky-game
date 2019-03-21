import React from "react";
import "./style.css";

const Card= props => <div role="img" className={props.shake === "true" ? "card img-thumbnail m-4 shake" : "card img-thumbnail m-4"} style={{ backgroundImage : `url(${props.url})` }} alt="Character Image" onClick={props.onClick}></div>;

export default Card;