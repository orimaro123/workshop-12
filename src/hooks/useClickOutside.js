export const useClickOutside = (ref, callback) => {
  // TODO 1: this hook should get an element and a callback and will call it whenever you click outside of the element
};

const isClickOutside = (element, clickEvent) => {
  return element && !element.contains(clickEvent.target);
};
