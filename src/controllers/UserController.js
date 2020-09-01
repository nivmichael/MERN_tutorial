const User = require('../models/User');

module.exports = {
    async store(req, res) {
        try {
            console.log(req.body)
            const {firstName, lastName, password, email} = req.body;
        } catch {

        }
    } 
}