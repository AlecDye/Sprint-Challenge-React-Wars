import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

//! API url: "https://swapi.co/api/people"

const CardList = () => {
    const [] = useState([]);
    useEffect(() => {
        axios
            .get("https://swapi.co/api/people")
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log("Data not returning", error)
            })
    }, []);
    return (
        <>
            <CharacterCard />
        </>
    );
};


export default CardList;