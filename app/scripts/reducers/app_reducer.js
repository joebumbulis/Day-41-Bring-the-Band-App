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

    case "VOTE_BAND":
      let newVotes = state.votes.slice();
      let vote = {
        name: action.name,
        image: action.image,
        hrf: action.uri
      };
      newVotes.push(vote);
      return Object.assign({}, state, { votes: newVotes });
  }

  console.log("Unhandled State!");
  return state;
}
