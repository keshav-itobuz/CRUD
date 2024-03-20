import { User } from '../model/mongodb.js';

export async function getUser(req,res) {
    const userId = req.query.id;
    const userData = await User.findById(userId)
    let data;
    if (userData) {
        data = {
            status: 200,
            data: userData,
            message: 'success'
        }
    }
    else {
        data = {
            status: 404,
            data: 'undefined',
            message: 'Error'
        }
    }
    res.status(200).json(data);
    res.end()
}

export async function updateUser(req,res) {
    try {
        const userId = req.query.id;
        console.log(userId);
        await User.findByIdAndUpdate(userId, { name: req.body.name })
        res.status(200).json({ message: "Succesfully Updated" });
    }
    catch (err) {
        res.status(404).json({ message: "Error not found" });
    }
    res.end()
}

export async function addUser(req,res) {
    try {
        const user = new User({
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,

        });
        await user.save()
        res.status(200).json({ message: "Succesfully Created" });
    }
    catch (err) {
        res.status(404).json({ message: "Error not found" });
    };
    res.end();
}

export async function deleteUser(req,res) {
    try {
        const userId = req.query.id;
        await User.findByIdAndDelete(userId);
        res.status(200).json({ message: "Succesfully Deleted" })
    }
    catch (err) {
        res.status(404).json({ message: "Error not found" });
    }
    res.end();
}