import { Heading } from "monday-ui-react-core";
import React, { memo, useCallback } from "react";
import "./PokemonDetails.scss";

//removing the memo will cause a rerender of all items on each hover
const PokemonDetails = memo(
  ({ name, imageUrl, onSelection, id, onHover, onMouseOut }) => {
    const onButtonClick = useCallback(() => {
      onSelection(id);
    }, [id, onSelection]);

    const onMouseOver = useCallback(() => {
      onHover(id);
    }, [id, onHover]);

    console.log("rerendering pokemon details", name);
    return (
      <div>
        <button className="pokemon-details" onClick={onButtonClick}>
          <img
            src={imageUrl}
            alt={name}
            onMouseOut={onMouseOut}
            onMouseOver={onMouseOver}
          />
        </button>
        <Heading type={Heading.types.h4} value={name} />
      </div>
    );
  }
);

export default PokemonDetails;
