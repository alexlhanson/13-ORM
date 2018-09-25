//imports
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

//initialize express app
let app = express();

//middleware chain
console.log('in app');
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//endpoint middleware imports
import router from './lib/api/api';
import errHandler from './lib/middleware/err-handler';

//enpoint middleware use
app.use(router);
console.log('endpoints');
app.use(errHandler);

//ES5 export due to compatibility issues
module.exports = app;
