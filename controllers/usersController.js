import  User  from '../model/mongodb.js';
import { StatusCodes } from 'http-status-codes';

export async function getUser(req, res) {
    try {
        const userId = req.query.id;
        const userData = await User.findById(userId);
        const data = {
            status: StatusCodes.OK,
            data: userData,
            message: 'success',
        };
        res.status(StatusCodes.OK).json(data);
    } catch (err) {
        res.status(StatusCodes.NOT_FOUND).json({ message: 'Error not found' });
    }
}

export async function updateUser(req, res) {
    try {
        const userId = req.query.id;
        console.log(userId);
        const data = await User.findByIdAndUpdate(userId, { name: req.body.name },{new:true});
        res.status(StatusCodes.OK).send({data, message: 'Succesfully Updated' });
    } catch (err) {
        res.status(StatusCodes.NOT_FOUND).json({ message: 'Error not found' });
    }

}

export async function addUser(req, res) {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(StatusCodes.OK).json({ message: 'Succesfully Created' });
    } catch (err) {
        res.status(StatusCodes.NOT_FOUND).json({ message: 'Error not found' });
    }
}

export async function deleteUser(req, res) {
    try {
        const userId = req.query.id;
        await User.findByIdAndDelete(userId);
        res.status(StatusCodes.OK).json({ message: 'Succesfully Deleted' });
    } catch (err) {
        res.status(StatusCodes.NOT_FOUND).json({ message: 'Error not found' });
    }
}
