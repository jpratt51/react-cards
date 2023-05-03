import React from "react";
import backOfCard from "./back.png";
import useFlipCard from "./hooks/useFlipCard";
import "./PlayingCard.css";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
    const [isFacingUp, toggleIsFacingUp] = useFlipCard(true);
    return (
        <img
            src={isFacingUp ? front : back}
            alt="playing card"
            onClick={toggleIsFacingUp}
            className="PlayingCard Card"
        />
    );
}

export default PlayingCard;
