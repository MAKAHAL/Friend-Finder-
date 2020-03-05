const express = require ("express")
const path = require ("path")

const app = express();

const PORT = process.env.PORT || 3000
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//both routes html , api 

require("./app/routings/apiRoutes")(app);
require("./app/routings/htmlRoutes")(app);



app.listen(PORT, function () {
    console.log (" server is listening from port" + PORT)
})
