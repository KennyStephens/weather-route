const fetch = require("node-fetch");

// exports.getForecast = (req, res, next) => {
//   fetch('https://api.darksky.net/forecast/9a9a1e6cdaf634513a02835dae240b2e/37.8267,-122.4233')
//   .then(res => res.json())
//   .then(result => {
//     console.log(result);
//     res.send(result);
//   })
//   .catch(err => console.log(err));
// }

exports.getForecast = (req, res, next) => {
  fetch(
    "https://api.opencagedata.com/geocode/v1/json?q=murray&key=8fc46226f4374af39d7c94dd39337768"
  )
    .then(res => res.json())
    .then(data => {
      console.log(
        data.results[0].bounds.northeast.lat,
        data.results[0].bounds.northeast.lng
      );
      const cityLat = data.results[0].bounds.northeast.lat;
      const cityLng = data.results[0].bounds.northeast.lng;
      fetch(
        `https://api.darksky.net/forecast/9a9a1e6cdaf634513a02835dae240b2e/${cityLat},${cityLng}`
      )
        .then(res => res.json())
        .then(result => {
          console.log(result);
          res.send(result);
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

