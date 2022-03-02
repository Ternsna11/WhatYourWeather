const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const port = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const observationsRouter = require("./observations/observations.router");

app.use(logger('dev'));
app.use(cors());
app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use("/observations", observationsRouter);
app.use(notFound);
app.use(errorHandler);

app.listen(port, function() {
    console.log("Runnning on " + port);
});

module.exports = app;