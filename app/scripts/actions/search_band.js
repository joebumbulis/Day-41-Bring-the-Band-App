export default function searchBand(searchQuery) {
  console.log(searchQuery);
  const url = `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist`;

  return function(dispatch) {
    dispatch({ type: "SEARCHING_BANDS" });
    return $.ajax({
      type: "GET",
      url: url,
      dataType: "json"
    }).then(function(response, success) {
      console.log(response, success);
      dispatch({ type: "DISPLAY_BANDS", data: response });
    });
  };
}
