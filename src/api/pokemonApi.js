const processName = (name) => {
  //replace "venusaur-gmax" with "Venusaur Gmax"
  return name
    .split("-")
    .map(([first, ...rest]) => `${first.toUpperCase()}${rest.join("")}`)
    .join(" ");
};

const processPokemons = (pokemons) => {
  pokemons.forEach((pokemon) => {
    pokemon.name = processName(pokemon.name);
  });

  return pokemons;
};

export const searchByName = async (name) => {
  const result = await fetch(`/pokemons/search?name=${name}&pageSize=50`);
  const json = await result.json();
  await sleep(2000);
  return processPokemons(json.pokemons);
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
