const express = require("express");
// const swaggerjsdoc = require("swagger-jsdoc");
const swaggerui = require("swagger-ui-express");
const swagger = require("./swagger.yaml");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoute = require("./routes/adminRoute");
const hotelRoute = require("./routes/hotelRoute");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: [
            "http://127.0.0.1:5173",
            "https://dulcet-bubblegum-d8e1eb.netlify.app/",
        ],
        credentials: true, //access-control-allow-credentials:true
        optionSuccessStatus: 200,
    })
);

app.get("/", (req, res) => {
    res.send("recieved get request");
});

app.use(authRoutes); // route for login/signup
app.use("/user", userRoutes); // Main route for "/user"
app.use("/admin", adminRoute);
app.use("/hotel", hotelRoute);

/*
const options = {
    definition: {
        openapi: "3.0.0",
        info:{
            title:"Dolly Kumari Backend API Doc",
            version:"0.0.1",
        },
        servers: [{ url: "http://localhost:5000" }],
    },
    apis: ["./routes/*.js"],
};

// const specs = swaggerjsdoc(options);
app.use("/api-docs", swaggerui.serve, swaggerui.setup(swagger));
*/

app.listen(5000, () => {
    console.log("http://localhost:5000");
});
