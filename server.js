const express = require("express");
const cors = require("cors");
require('dotenv').config();


// initialise exxpress
const app = express();

// express middleware that convert request body to JSON.
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({origin: '*'}));

// import routes
const lipaNaMpesaRoutes = require("./routes/lipanampesa.js");
app.use('/api',lipaNaMpesaRoutes);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
