const express = require("express");
const app = express();
const port = 3000;
const ballArray = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/greeting/:name", function (req, res) {
  res.send("hello " + req.params.name);
  console.log("Greeting express application created.");
});

app.get("/tip/:total/:tipPercentage", function (req, res) {
  console.log(req.params);
  res.send(
    "The total is " +
      req.params.total +
      ". The tip per centage is " +
      req.params.tipPercentage +
      "%. The tip is " +
      req.params.total * (req.params.tipPercentage / 100)
  );
  console.log("Tip Calculator express application created.");
});

app.get("/magic/Will%20I%20Be%20A%20Millionaire", function (req, res) {
  res.send(ballArray[Math.floor(Math.random() * ballArray.length)]);
  console.log("Magic 8 Ball express application created.");
});

app.listen(port, () => {
  console.log("listening on port", port);
});
