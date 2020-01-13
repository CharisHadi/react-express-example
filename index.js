const express = require("express");
const path = require("path");

const app = express();

// Serve STatic files from React
app.use(express.static(path.join(__dirname, 'client/build')));

//Example APi Endpoint that returns shortlist of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent List of items');
});


//Request Error responding
app.get ('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);