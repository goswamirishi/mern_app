const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const fetchUser = require('../middleware/fetchUser')
const JWT_SECRET = "Srish_Goswami"

//Route 1 create user
router.post('/createUser', [
    body('name').notEmpty().withMessage('enter a valid name'),
    body('email').isEmail().withMessage('enter a valid email'),
    body('password').isLength({ min: 5 }).withMessage('password atleast 5 character')
], async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        try {
            let user = await User.findOne({ email: req.body.email })
            if (user) {
                return res.status(400).send({ errors: 'User already exist' });
            }
            const salt = await bcrypt.genSalt(10);
            const secPasswd = await bcrypt.hash(req.body.password, salt)
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPasswd,
            })

            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, JWT_SECRET)
            return res.json({ authToken })
        }
        catch (error) {
            console.log(error)
            res.status(500).send({ errors: 'Some error occured' });
        }
    }
    else
        return res.status(400).send({ errors: result.array() });
})


//Route 2 Authenticate user

router.post('/login', [
    body('email').isEmail().withMessage('enter a valid email'),
    body('password').exists().withMessage('Password can not be blank'),
], async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).send({ errors: result.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({email});
        if (!user)
            return res.status(400).json({ error: 'Please try to login with correct credentials' });
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare)
            return res.status(400).json({ error: 'Please try to login with correct credentials' });
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)
        return res.json({ authToken })

    } catch (error) {
        console.log(error)
        return res.status(500).send({ errors: 'Internal server error' });
    }

})


//Route 3 Get user
router.post('/getUser', fetchUser, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        return res.send(user)
    } catch (error) {
        console.log(error)
        return res.status(500).send({ errors: 'Internal server error' });
    }
})

module.exports = router