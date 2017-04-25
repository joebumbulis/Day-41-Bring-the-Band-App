export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      searching: false,
      bands: [],
      votes: []
    };
  }

  switch (action.type) {
    case "SEARCHING_BANDS":
      return Object.assign({}, state, { searching: true });

    case "DISPLAY_BANDS":
      return Object.assign({}, state, {
        searching: false,
        bands: action.data.artists.items
      });
  }

  console.log("Unhandled State!");
  return state;
}
