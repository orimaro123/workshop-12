import { useLocalStorage } from "../hooks/useLocalStorage";

const PIKACHU_DETAILS = {
  id: 25,
  name: "pikachu",
  imageUrl:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
};

const STORAGE_KEY = "favorite-pokemon";

export const useFavoritePokemon = () => {
  //default value is Pikachu - who doesn't like him?
  return useLocalStorage(STORAGE_KEY, PIKACHU_DETAILS);
};
