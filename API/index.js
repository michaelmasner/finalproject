const express = require("express");

const app = express();
const cors = require("cors");
// Allows us to access from device
app.use(cors());
const usersRouter = require("./src/api/user-routes");

//Body Parser Middlware:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// jwt
//app.use(jwtAuth);

app.use("/api/user", usersRouter);
app.use("/api/provider", require("./src/api/provider-routes"));
app.use("/api/userauth", require("./src/api/user-auth-routes"));
app.use("/api/providerauth", require("./src/api/provider-auth-routes"));

// Custom Middleware
app.use((req, res, next) => {
  console.log("This is a middleware function printing body");
  console.log(req.body);
  next();
});

const PORT = process.env.PORT || 2000;

app.listen(PORT, "127.0.0.1", () =>
  console.log(`Server running on port ${PORT}`)
);
