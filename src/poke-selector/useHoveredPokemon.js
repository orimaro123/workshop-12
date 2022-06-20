import React, { useState, useCallback, useMemo } from "react";

export const useHoveredPokemon = (searchResults) => {
  const [hoveredPokemon, setHoveredPokemon] = useState(undefined);

  const onPokeHovered = useCallback(
    (id) => {
      const details = searchResults.find(
        (pokeDetails) => id === pokeDetails.id
      );
      setHoveredPokemon(details);
    },
    [searchResults]
  );

  const resetHoveredPoke = useCallback(() => {
    setHoveredPokemon(undefined);
  }, []);

  const hoveredTypeText = useMemo(() => {
    if (!hoveredPokemon) {
      return "Hover to see Poké type";
    }
    const types = Object.values(hoveredPokemon.types).map(({ name }) => name);
    const typeText = types.join(" / ");
    return `Type: ${typeText}`;
  }, [hoveredPokemon]);

  return { onPokeHovered, resetHoveredPoke, hoveredTypeText };
};
