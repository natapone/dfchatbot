const chatbot = require('../chatbot/chatbot');

module.exports = app => {
    app.get('/', (req, res) => {
        res.send({'hello': 'test'});
    });

    // Sent text to DialogFlow
    app.post('/api/df_text_query', async (req, res) => {
        var datetime = new Date();
        console.log('----df_text_query call ' , datetime);
        console.log(req.body);

        let responses = await chatbot.textQuery(req.body.text, req.body.parameters);
        res.send(responses[0].queryResult);
    });

    // Sent event to DialogFlow
    app.post('/api/df_event_query', async (req, res) => {
        var datetime = new Date();
        console.log('----df_event_query call ' , datetime);
        console.log(req.body);

        let responses = await chatbot.eventQuery(req.body.event, req.body.parameters);
        res.send(responses[0].queryResult);
    });

}



