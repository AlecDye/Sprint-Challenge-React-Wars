import React from "react";

//* name, birth_year, height, mass

const CharacterCard = (props) => {
    // console.log(props)
    return (
        <div>
            <h2>{props.name}</h2>
            <div>
                <p>{props.height} cm</p>
                <p>{props.mass} kg</p>
            </div>
        </div>
    );
};

export default CharacterCard;