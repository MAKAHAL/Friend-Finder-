const express = require ("express")
const path = require ("path")

const app = express();

const PORT = process.env.PORT || 1998
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//both routes html , api 

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);



app.listen(PORT, function () {
    console.log (" server is listening from port" + PORT)
})