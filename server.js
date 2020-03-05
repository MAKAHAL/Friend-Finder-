const express = require ("express")
const path = require ("path")
var bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3000
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
//both routes html , api 
app.use('/static', express.static(path.join(__dirname, 'app/public')))

require("./app/routings/apiRoutes")(app);
require("./app/routings/htmlRoutes")(app);



app.listen(PORT, function () {
    console.log (" server is listening from port" + PORT)
})
