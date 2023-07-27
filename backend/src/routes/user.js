const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const usersFound = await User.findAll()
        if(usersFound.length > 0){
            res.status(200).json(usersFound)
        }else{
            res.status(404).json({error: `No user was added yet`})
        }
    } catch (error) {
        res.status(500).json({action: "Server Error => GetUsers", error: error.message})
    }
})



module.exports = router