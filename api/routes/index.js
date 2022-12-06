const router = require('express').Router();
const userRoutes = require('./user');

// User routes
router.use('/users', userRoutes);


// Default route
router.get('/', (req, res) => {
    res.send({ message: 'Hello World' });
});

module.exports = router;
