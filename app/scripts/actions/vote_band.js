export default function voteBand(band) {
  console.log(band);

  return function(dispatch) {
    dispatch({
      type: "VOTE_BAND",
      name: band.name,
      image: band.images[1].url,
      hrf: band.uri
    });

    return $.ajax({
      type: "POST",
      dataType: "json",
      url: "https://api.backendless.com/v1/data/band",
      headers: {
        "application-id": "85577861-2A70-62E0-FFC7-B56EDDAFC300",
        "secret-key": "71A87D8E-1294-CD5F-FFF6-C9311CC4CD00",
        "Content-Type": "application/json",
        "application-type": "REST"
      },

      data: JSON.stringify({
        name: band.name,
        image: band.images[1].url,
        hrf: band.uri
      })
    }).then((data, response) => {
      console.log(response);
    });
  };
}
