// routes/routes.js

const routes = function (app, db) {

  app.post('/notes', (req, res) => {

    const user = {
      name: req.body.name,
      description: req.body.des
    };

    db.collection('users').insert(user, (err, result) => {
      if (err) {
        console.log(err)
        res.send({
          'error': 'An error has occurred'
        });
      } else {
        res.send(result.ops[0]);
      }
    });

  });

};

//exports
module.exports = routes;
