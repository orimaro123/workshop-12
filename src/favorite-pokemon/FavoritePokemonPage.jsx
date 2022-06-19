import { useCallback, useState } from "react";
import { Heading, Button, Flex } from "monday-ui-react-core";
import PokeSelector from "../poke-selector/PokeSelector";
import "./FavoritePokemonPage.scss";
import { useFavoritePokemon } from "./useFavoritePokemon";

const FavoritePokemonPage = () => {
  const [favoritePokemon, setFavoritePokemon] = useFavoritePokemon();
  const [isPokeSelectorDisplayed, setIsPokeSelectorDisplayed] = useState(false);

  const onChangeClicked = useCallback(() => {
    setIsPokeSelectorDisplayed(true);
  }, [setIsPokeSelectorDisplayed]);

  const onSelectorClosed = useCallback(
    (selection) => {
      if (selection) {
        setFavoritePokemon(selection);
      }
      setIsPokeSelectorDisplayed(false);
    },
    [setFavoritePokemon]
  );

  return (
    <Flex direction={Flex.directions.COLUMN}>
      <Heading type={Heading.types.h1} value={`Your favorite Pokémon is ${favoritePokemon.name} !`} />
      <img
        key={favoritePokemon.name}
        src={favoritePokemon.imageUrl}
        alt={favoritePokemon.name}
        className="favorite-pokemon-img"
      />
      <Button kind={Button.kinds.SECONDARY} onClick={onChangeClicked}>
        I don't like it
      </Button>

      {isPokeSelectorDisplayed && <PokeSelector onClose={onSelectorClosed} />}
    </Flex>
  );
};

export default FavoritePokemonPage;
