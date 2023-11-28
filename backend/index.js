const connectToMongo = require('./db');


connectToMongo();
const express = require('express');
const app = express();
const port = 2700;
app.use(express.json());

// available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
    console.log(`iNotebook app listening on port http://localhosts:${port}`)
})