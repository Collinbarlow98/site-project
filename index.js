var express = require('express');
var path = require('path');

var homeRouter = require('./routes/home');
var portfolioRouter = require('./routes/portfolio');

var app = express();

// view engine setup
app.use(express.static(path.join(__dirname, "partials")));
app.use(express.static(path.join(__dirname, '/public')))
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set("views", "./views");
app.set("view engine", "mustache");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/portfolio', portfolioRouter);

app.listen(3000, () => {
  
})
