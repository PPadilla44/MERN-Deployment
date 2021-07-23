const { Schema } = require("../models/model");

module.exports = {

    create: (req, res) => {
        const { name, type, description, skills } = req.body;
        Schema.create({ name, type, description, skills })
            .then(one => res.json(one))
            .catch(err => res.status(400).json(err));
    },

    getAll: (req, res) => {
        Schema.find({})
            .then(list => res.json(list))
            .catch(err => res.status(400).json(err));
    },

    getOne: (req, res) => {
        Schema.findOne({ _id: req.params.id } )
            .then(one => res.json(one))
            .catch(err => res.status(400).json(err));
    },

    updateOne: (req, res) => {
        Schema.findOneAndUpdate( { _id: req.params.id }, req.body, { new: true } )
            .then(updatedOne => res.json(updatedOne))
            .catch(err => res.status(400).json(err))
    },

    deleteOne: (req, res) => {
        Schema.findByIdAndDelete( { _id: req.params.id } )
            .then(deletedOne => res.json(deletedOne))
            .catch(err => res.status(400).json(err));
    }


}