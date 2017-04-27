export default function logIn(username, password) {
  console.log(username, password);
  return function(dispatch) {
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "http://api.backendless.com/v1/users/login",
      headers: {
        "application-id": "85577861-2A70-62E0-FFC7-B56EDDAFC300",
        "secret-key": "71A87D8E-1294-CD5F-FFF6-C9311CC4CD00",
        "Content-Type": "application/json",
        "application-type": "REST"
      },
      data: JSON.stringify({
        login: username,
        password: password
      })
    }).then(data => {
      dispatch({ type: "LOG_IN", data: data });
    });
  };
}
