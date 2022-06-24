import { DialogContentContainer, Flex, Icon } from "monday-ui-react-core";
import Close from "monday-ui-react-core/dist/icons/Close";
import React, { useState, useCallback, useEffect, useRef } from "react";
import "./PokeSelector.scss";
import PokeSelectorContent from "./PokeSelectorContent";
import { useClickOutside } from "../hooks/useClickOutside";

const PokeSelector = ({ onClose }) => {
  // TODO 1: use your useClickOutside in order to close the dialog when someone clicks outside
  const dialogRef = useRef();
  useClickOutside(dialogRef, onClose);
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    //@@ -24,9 +26,9 @@ const PokeSelector = ({ onClose }) => {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  const onCancel = useCallback(() => {
    onClose();
  }, [onClose]);

  const onSelection = useCallback((pokeSelection) => {
    onClose(pokeSelection);
  }, []);

  return (
    <Flex
      align={Flex.align.CENTER}
      justify={Flex.justify.CENTER}
      className="poke-selector"
    >
      <DialogContentContainer
        type={DialogContentContainer.types.MODAL}
        size={DialogContentContainer.sizes.LARGE}
        className={"poke-selector_modal-content-container"}
        // this is how you can pass ref to the dialog
         ref={dialogRef}
      >
        <Icon
          icon={Close}
          onClick={onCancel}
          className="poke-selector_modal-close"
        />
        <span className="clock-time">{date.toLocaleTimeString()}</span>
        <PokeSelectorContent onSelection={onSelection} />
      </DialogContentContainer>
    </Flex>
  );
};

export default PokeSelector;
