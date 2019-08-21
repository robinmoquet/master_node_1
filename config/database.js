const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/master_node_1', {useNewUrlParser: true});

module.exports = mongoose;