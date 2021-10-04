import { OPEN, CLOSE, CLOSEMODAL } from "./counter.types";

export const openDoor = (day = 0) => {
  return {
    type: OPEN,
    payload: day
  };
};

export const closeDoor = (day = 0) => {
  return {
    type: CLOSE,
    payload: day
  };
};

export const closeDoorModal = (open = false) => {
  return {
    type: CLOSEMODAL,
    payload: open
  };
};
