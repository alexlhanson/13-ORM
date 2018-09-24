//imports
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

//initialize express app
let app = express();

//middleware chain
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//endpoint middleware imports
import router from '.lib/api/api';
// import badRequest from '.lib/middleware/bad-request';
// import errHandler from '.lib/middleware/err-handler';

//enpoint middleware use
app.use(router);
// app.use(badRequest);
// app.use(errHandler);

//ES5 export due to compatibility issues
module.exports = app;
