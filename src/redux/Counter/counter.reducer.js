import { OPEN, CLOSE, CLOSEMODAL } from "./counter.types";
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }

  return array;
}
const INITIAL_STATE = {
  doors: [],
  doorModal: false,
  numbers: shuffle([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24
  ])
};

const reducer = (state = INITIAL_STATE, action) => {
  console.log(
    "action",
    action,
    "payload",
    action.payload,
    "doors",
    state.doors
  );
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        doors: [...state.doors, action.payload],
        doorModal: true
      };
    case CLOSE:
      const arr = state.doors.filter((day) => day !== action.payload);
      return {
        ...state,
        doors: arr,
        doorModal: false
      };
    case CLOSEMODAL:
      return {
        ...state,
        doorModal: false
      };

    default:
      if (action.payload && Object.keys(action.payload).includes("doors")) {
        return {
          ...state,
          doors: action.payload.doors.doors,
          doorModal: false
        };
      }
      return state;
  }
};

export default reducer;
