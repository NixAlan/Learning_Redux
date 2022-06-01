const initialWagonState = {
  supplies: 100,
  distance: 0,
  day: 0,
};

const gameReducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case "gather": {
      return {
        ...state,
        supplies: state.supplies + 15,
        day: state.day + 1,
      };
    }
    case "travel": {
      if (state.supplies < action.payload * 20) {
        return state;
      } else {
        return {
          ...state,
          supplies: state.supplies - action.payload * 20,
          distance: state.distance + action.payload * 10,
          day: state.day + action.payload,
        };
      }
    }
    case "tippedWagon": {
      return {
        ...state,
        supplies: state.supplies - 30,
        day: state.day + 1,
      };
    }
    default: {
      return state;
    }
  }
};
let wagon = gameReducer(undefined, {});
wagon = gameReducer(wagon, { type: "travel", payload: 1 });
wagon = gameReducer(wagon, { type: "gather" });
wagon = gameReducer(wagon, { type: "tippedWagon" });
wagon = gameReducer(wagon, { type: "travel", payload: 3 });
wagon = gameReducer(wagon, { type: "travel", payload: 3 });
console.log(wagon);
