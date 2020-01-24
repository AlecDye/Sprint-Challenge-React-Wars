import React from "react";

//* name, birth_year, homeworld, species
//TODO: structure card based on props
const CharacterCard = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <div>
                <p>{props.birth_year}</p>
                <p>{props.homeworld}</p>
                <p>{props.species}</p>
            </div>
        </div>
    );
};

export default CharacterCard;