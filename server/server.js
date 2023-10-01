const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
  const contactRoute = require("./ContactRoute");
  

// connString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@atlascluster.xroj15q.mongodb.net/ecomern?retryWrites=true&w=majority`;

connString = `mongodb+srv://Vikram:eUvqKR0dMysZ9H3u@cluster0.yiq7c1y.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(connString, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

  // const contactRoute = require("./ContactRoute");

  app.use("/contacts", contactRoute);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(8000, () => {
  console.log("server is running at port", 8000);
});

