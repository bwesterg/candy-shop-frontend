import React from "react";
import "./CandyListing.css";

export default function CandyListing(props) {
    return(
            <div className="candy-item">
                {props.name} made in {props.origin}
                <img src={props.image} alt={props.name} />
            </div>
    )
}