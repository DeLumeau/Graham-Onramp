const express = require('express');
const app = express();
const routes = require('./routes');
// const { connect } = require('mongoose');
// require('./config')

app.use(routes);

// connect(process.env.DB_LINK, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
//     .then(() => {
//         app.listen(3001);
//         console.log('> listening to port 3001')
//     })
//     .catch(err => {
//         console.log(err);
//     })


/* 
    note: before procution, make sure to map() your responses;
*/
