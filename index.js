const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

require('./routers/dialogFlowRouters')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
    console.log(`Example app listening on port ${PORT}!`)
)
