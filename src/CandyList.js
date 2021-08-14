import React from "react";
import "./CandyList.css";
import CandyListing from "./CandyListing";

export default function CandyList(props) {
    return(
        <ul>
            <li>
                <CandyListing name="Skittles" origin="United States"/>
            </li>
            <li>
                <CandyListing name="Snickers" origin="United States"/>
            </li>
        </ul>
    )
}