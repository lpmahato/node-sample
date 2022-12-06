const httpStatus = require('http-status');
const User = require('../models/user');

const findAll = async (req, res) => {
    try {
        const users = await User.find({});
        return res.send({ status: 'success', data: users });
    } catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: err });
    }
};

const create = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await User.create({
            name,
            email,
        });
        return res.status(httpStatus.CREATED).send({ status: 'success', data: user });
    } catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: err });
    }
}

const findOne = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(httpStatus.NOT_FOUND).send({ status: 'failed', message: 'User not found.' });
        }
        return res.send({ status: 'success', data: user });
    } catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: err });
    }
}

module.exports = {
    findAll,
    create,
    findOne,
};
