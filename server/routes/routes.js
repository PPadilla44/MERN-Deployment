const Controller = require("../controllers/controller");

module.exports = function (app) {
    app.post('/api/pets', Controller.create);
    app.get('/api/pets', Controller.getAll);
    app.get('/api/pets/:id', Controller.getOne);
    app.put('/api/pets/:id', Controller.updateOne);
    app.delete('/api/pets/:id', Controller.deleteOne);
}