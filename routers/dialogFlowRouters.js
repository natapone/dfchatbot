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
        console.log(req.body);

        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: req.body.text,
                    languageCode: config.dialogFlowSessionLanguageCode,
                }
            }
        };
        sessionClient
            .detectIntent(request)
            .then(responses => {
                console.log('Detected intent');
                const result = responses[0].queryResult;
                console.log(result);

                console.log(`-- Query: ${result.queryText}`);
                console.log(`-- Response: ${result.fulfillmentText}`);
                if(result.intent) {
                    console.log(`-- Intent: ${result.intent.desplayName}`);
                } else {
                    console.log('-- No intent matched!');
                }
            })
            .catch(err => {
                console.error('ERROR:', err);
            });
        res.send({'do': 'text query'});
    });

    // Sent event to DialogFlow
    app.post('/api/df_event_query', (req, res) => {
        res.send({'do': 'event query'});
    });

}



