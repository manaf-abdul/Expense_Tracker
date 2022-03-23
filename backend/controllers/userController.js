import asyncHandler from "express-async-handler";
import User from '../models/UserModel.js';    

// @desc    Get all users
// @route   GET /api/users/userList
// @access  Public
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find()
    res.json(users)
})


export {getUsers}