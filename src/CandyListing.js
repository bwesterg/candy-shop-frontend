import React from "react";
import "./CandyListing.css";

export default function CandyListing(props) {
    return(
            <li className="candy-item">
                {props.name} made in {props.origin}
                <img src={props.image} alt={props.name} />
            </li>
    )
}