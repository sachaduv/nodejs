const config = require('./config.json');

function getDBConnection(){
    return `mongodb+srv://${config.username}:${config.password}@mean.1ayhi.mongodb.net/Nodejs?retryWrites=true&w=majority`
}

module.exports = {
    getDBConnection : getDBConnection
};

