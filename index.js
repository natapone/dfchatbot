const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({'hello': 'test'});
});

// Sent text to DialogFlow
app.post('/api/df_text_query', (req, res) => {
    res.send({'do': 'text query'});
});

// Sent event to DialogFlow
app.post('/api/df_event_query', (req, res) => {
    res.send({'do': 'event query'});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
    console.log(`Example app listening on port ${PORT}!`)
)
