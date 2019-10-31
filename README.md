# dfchatbot
Test Dialogflow Chatbot

# Test
$ node -v

# Install - Express
$ npm init
$ npm install express --save

# Install - Heroku CLI
$ sudo snap install --classic heroku
$ heroku -v

# Heroku - Create project
$ heroku login
$ heroku create

Creating app... done, ⬢ thawing-reaches-06931
https://thawing-reaches-06931.herokuapp.com/ | https://git.heroku.com/thawing-reaches-06931.git

# Heroku - Push to server
$ git push heroku master

# Heroku - Debug
$ heroku logs --tail

# Dev server - Nodemon + config in package.json
$ npm run backend

# Run server
$ node --inspect index.js
$ node index.js

# Test POST - text
$ curl -H "Content-Type: application/json" --data '{"text":"set meeting"}' -X POST http://localhost:5000/api/df_text_query

# Test POST - event
Need to set events in Dialogflow
$ curl -H "Content-Type: application/json" --data '{"event":"Welcome"}' -X POST http://localhost:5000/api/df_event_query

curl -H "Content-Type: application/json" --data '{"event":"schedule_appointment"}' -X POST http://localhost:5000/api/df_event_query

curl -H "Content-Type: application/json" --data '{"event":"schedule_appointment"}' -X POST https://thawing-reaches-06931.herokuapp.com/api/df_event_query

