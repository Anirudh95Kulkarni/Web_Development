//----------------------------------------------------
// IMPORTS
//----------------------------------------------------
//npm imports
const express =require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');

//Config import
const config = require("./config");

//Route imports
const mainRoute = require("./routes/main");
const sportRoutes = require("./routes/sports");
const commentRoutes = require("./routes/comments");

//Model imports
const Sport = require("./models/sport");
const Comment = require("./models/comment");

//------------------------------------------------------------
//Development
//-------------------------------------------------------------
app.use(morgan('tiny'));

//Seed the DB
const seed = require('./utils/seed');
//seed();
//------------------------------------------------------------
//Config
//-------------------------------------------------------------
//Connect to DB
mongoose.connect(config.db.connection, {useNewUrlParser: true, useUnifiedTopology: true});

//Express config
app.set("view engine", "ejs");
app.use(express.static("public"));

//Body parser config
app.use(bodyParser.urlencoded({extended: true}));

//method override config
app.use(methodOverride('_method'));

//Routes config
app.use("/",mainRoute);
app.use("/sports", sportRoutes);
app.use("/sports/:id/comments", commentRoutes);

//------------------------------------------------------------
//Listen
//-------------------------------------------------------------
app.listen(3000, () => {
	console.log("App running on port 3000");
})