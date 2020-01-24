import React from "react";
import styled from "styled-components";

//* name, birth_year, height, mass

const NameContainer = styled.div`
    max-width: 100%;
    padding: 1rem;
    margin: 0 auto;
    margin-bottom: 2rem;
    background: grey;

`;

const CharacterCard = (props) => {
    // console.log(props)
    return (
        <div>
            <NameContainer>
                <h2>{props.name}</h2>
                <p>Height: {props.height} cm</p>
                <p>Mass: {props.mass} kg</p>
            </NameContainer>
        </div>
    );
};

export default CharacterCard;