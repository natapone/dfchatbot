const dialogflow = require('dialogflow');
const config = require('../config/keys');

const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(
                        config.googleProjectID, 
                        config.dialogFlowSessionID
                    );

module.exports = app => {
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

}



