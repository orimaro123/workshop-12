import { useCallback } from "react";

export const useIsMounted = () => {
  // TODO 2: currently you are in a risk for an exception, if you'll start a search and close the modal the app will crash
  //         this is because you update the state of unmounted component, implement this hook to avoid this.
  //         this should return a function that would inidicate if the component is mounted or not
  return useCallback(() => true, []);
};
