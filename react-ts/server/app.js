let twitter = require("twitter");

const client = new Twitter({
  consumer_key: "",
  consumer_secret: "",
  access_token_key: "",
  access_token_secret: "",
});

const params = { screen_name: "nodejs" };
client.get(
  "statuses/user_timeline",
  params,
  function (error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  }
);
