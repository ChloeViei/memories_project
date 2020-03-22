// load the memory model
var Memory = require('./models/memory');

// expose the routes to our app with module.exports
module.exports = function(app) {

    // api ---------------------------------------------------------------------
    // get all memories
    app.get('/api/memories', function(req, res) {

        // use mongoose to get all memories in the database
        Memory.find(function(err, memories) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(memories); // return all memories in JSON format
        });
    });

    // create memory and send back all memories after creation
    app.post('/api/memories', function(req, res) {

        // create a memory, information comes from AJAX request from Angular
        Memory.create({
            text : req.body.text,
            done : false
        }, function(err, memory) {
            if (err)
                res.send(err);

            // get and return all the memories after you create another
            Memory.find(function(err, memories) {
                if (err)
                    res.send(err);
                res.json(memories);
            });
        });

    });

    // delete a memory
    app.delete('/api/memories/:memory_id', function(req, res) {
        Memory.remove({
            _id : req.params.memory_id
        }, function(err, memory) {
            if (err)
                res.send(err);

            // get and return all the memories after you create another
            Memory.find(function(err, memories) {
                if (err)
                    res.send(err);
                res.json(memories);
            });
        });
    });
};
