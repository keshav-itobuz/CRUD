import { User } from '../model/mongodb.js';
import { StatusCodes } from 'http-status-codes';


export async function getUser(req, res) {
    try {
        const userId = req.query.id;
        const userData = await User.findById(userId)
        const data = {
            status: StatusCodes.OK,
            data: userData,
            message: 'success'
        }
        res.status(StatusCodes.OK).json(data);
    }
    catch (err) {
        res.status(StatusCodes.NOT_FOUND).json({ message: "Error not found" });
    }
    res.end()
}

export async function updateUser(req, res) {
    try {
        const userId = req.query.id;
        console.log(userId);
        await User.findByIdAndUpdate(userId, { name: req.body.name })
        res.status(StatusCodes.OK).json({ message: "Succesfully Updated" });
    }
    catch (err) {
        res.status(StatusCodes.NOT_FOUND).json({ message: "Error not found" });
    }
    res.end()
}

export async function addUser(req, res) {
    try {
        const user = new User({
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,

        });
        await user.save()
        res.status(StatusCodes.OK).json({ message: "Succesfully Created" });
    }
    catch (err) {
        res.status(StatusCodes.NOT_FOUND).json({ message: "Error not found" });
    };
    res.end();
}

export async function deleteUser(req, res) {
    try {
        const userId = req.query.id;
        await User.findByIdAndDelete(userId);
        res.status(StatusCodes.OK).json({ message: "Succesfully Deleted" })
    }
    catch (err) {
        res.status(StatusCodes.NOT_FOUND).json({ message: "Error not found" });
    }
    res.end();
}