import React from "react";
import "./CandyList.css";
import CandyListing from "./CandyListing";

export default function CandyList(props){

    const $candies = props.candies.map(candy => {
        return <li key={candy.id}>
            <CandyListing 
                name={candy.name} 
                origin={candy.origin} 
                image={candy.image}
            />
        </li>
    })

    return(
        <ul>{$candies}</ul>
    )
}