import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import styled from "styled-components";


//* API url: "https://swapi.co/api/people/"
//* data>resultsArray>characterObjects>
//* name, birth_year, height, mass

const CardList = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
        axios
            .get("https://swapi.co/api/people/")
            .then(response => {
                // console.log(response)
                setState(response.data.results)
                console.log(response.data.results)
            })
            .catch(error => {
                console.log("Data not returning", error)
            })
    }, []);
    return (
        <div>
            {state.map((character, index) => {
                return (
                    <CharacterCard
                        key={index}
                        name={character.name}
                        birth_year={character.birth_year}
                        height={character.height}
                        mass={character.mass}
                    />
                );
            })}
        </div>
    );
};

//! error: CharacterCard's children need unique "key" prop

export default CardList;