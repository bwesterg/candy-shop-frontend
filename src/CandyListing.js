import React from "react";
import "./CandyListing.css";

export default function CandyListing(props) {
    return(
        <p>{props.name} made in {props.origin}</p>
    )
}