const express = require("express");
const dotenv = require("dotenv");

const morgan = require("morgan");
const colors = require("colors");

const connectDB = require("./config/db");

const errorHandler = require("./middleware/error");

dotenv.config({ path: "./config/config.env" });

//connect to database
connectDB();

//Route files
const bootcamps = require("./routes/bootcamps");

const app = express();

app.use(express.json());

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/bootcamps", bootcamps);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
