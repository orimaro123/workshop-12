import { useState, useLayoutEffect } from "react";
import { searchByName } from "../api/pokemonApi";
import { useIsMounted } from "../hooks/useIsMounted";

export const usePokeSearch = (debouncedSearchInput) => {
  const isMounted = useIsMounted();

  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Layout effect, unlike a regular effect, is called BEFORE the DOM is updated, thus preventing flashes of "old" state.
  // If you want to see it for yourself - change "useLayoutEffect" to "useEffect", and try changing the search values.
  // You'll notice a small flash of the previous results before the new results are shown.
  // Read about it here: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
  useLayoutEffect(() => {
    if (!debouncedSearchInput) {
      return;
    }
    const searchWhenStarted = debouncedSearchInput;
    setIsLoading(true);
    searchByName(debouncedSearchInput).then((results) => {
      // The isMounted is used here as a best practice, though in our case it won't really have an effect:
      // The debounced value isn't updated if the component is not mounted.
      if (isMounted() && searchWhenStarted === debouncedSearchInput) {
        // the search may have changed since we started fetching the results
        setSearchResults(results);
        setIsLoading(false);
      }
    });
  }, [debouncedSearchInput, isMounted]);

  return { searchResults, isLoading };
};
