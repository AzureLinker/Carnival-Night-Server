// *routes/index.js

const mainRoute = require('./main');
module.exports = function(app){
    mainRoute(app);
}