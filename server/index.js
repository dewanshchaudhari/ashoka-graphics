const data = require('./getData');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use('/app', express.static('public'));

app.get('/', (req, res) => {
    res.json(JSON.parse(data));
});

function notFound(req, res, next) {
    res.status(404);
    const error = new Error('Not Found - ' + req.originalUrl);
    next(error);
}

function errorHandler(err, req, res, next) {
    res.status(res.statusCode || 500);
    res.json({
        message: err.message,
        stack: err.stack
    });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 1337;
app.listen(port, () => {
    console.log('Listening on port', port);
});